import { medicineFromMloader } from "../medPageLoader/medicineFromMloader.js";
import { COMMON_SYMPTOMS } from "./constants.js";
import { DISEASE_MEANINGS, TREATMENTS, LIFESTYLE_CHANGES } from "../register/diseaseExtraData.js";

export function buildResult({
  disease,
  score,
  confidenceLabel,
  totalMatches,
  emergencyDetected,
  matchedSymptoms = [],
  matchedTests = [],
  matchedRiskFactors = [],
  matchedCauses = [],
  matchedPhysicalExam = [],
  matchedComplications = [],
  matchedRedFlags = [],
  contradictions = [],
  contradictionLevel = null,
  totalContradictions = 0,
  clusterAnalysis = []
}) {

  // ==========================
  // TOP SYMPTOMS & DIAGNOSIS LOGIC
  // ==========================
  const topSymptoms = [...matchedSymptoms, ...matchedRedFlags].filter(Boolean).slice(0, 5).map(symptom => symptom.replace(/_/g, " ")).join(", ");
  const differentialDiagnosis = disease.differential_diagnosis || [];
  const requiredSymptoms = disease.required_symptoms || [];
  const negativeSymptoms = disease.required_negative_symptoms || [];

  const matchedRequiredSymptoms = requiredSymptoms.filter(symptom => matchedSymptoms.includes(symptom));
  const matchedNegativeSymptoms = negativeSymptoms.filter(symptom => matchedSymptoms.includes(symptom));
  
  const requiredMatchCount = matchedRequiredSymptoms.length;
  const negativeSymptomCount = matchedNegativeSymptoms.length;
  const specificSymptomCount = matchedSymptoms.filter(symptom => !(COMMON_SYMPTOMS || []).includes(symptom)).length;
  const requiredMatchPercent = requiredSymptoms.length ? requiredMatchCount / requiredSymptoms.length : 0;

  // ==========================
  // CLUSTERS
  // ==========================
  const matchedClusters = [];
  let clusterStrength = 0;

  Object.entries(disease.symptom_clusters || {}).forEach(([clusterName, cluster]) => {
    const clusterMatches = (cluster.symptoms || []).filter(symptom => matchedSymptoms.includes(symptom)).length;
    if (clusterMatches >= (cluster.minimum_match || 2)) {
      matchedClusters.push(clusterName);
      clusterStrength += clusterMatches;
    }
  });

  // ==========================
  // REASON & INTERPRETATION
  // ==========================
  let reason = topSymptoms ? `Partial disease pattern detected (${topSymptoms})` : "Partial disease pattern detected";
  if (matchedTests.length >= 2) {
    reason = topSymptoms ? `Strong laboratory evidence detected (${topSymptoms})` : "Strong laboratory evidence detected";
  } else if (matchedSymptoms.length >= 5 && matchedTests.length >= 1) {
    reason = topSymptoms ? `Strong symptom pattern detected (${topSymptoms})` : "Strong symptom pattern detected";
  } else if (matchedRedFlags.length >= 1 && emergencyDetected) {
    reason = topSymptoms ? `Critical warning signs detected (${topSymptoms})` : "Critical warning signs detected";
  }

  let clinicalInterpretation = "Limited clinical evidence available";
  if (matchedClusters.length >= 2 && matchedSymptoms.length >= 4) {
    clinicalInterpretation = "Multiple symptom clusters support this diagnosis";
  } else if (matchedRequiredSymptoms.length >= 2) {
    clinicalInterpretation = "Core disease-defining symptoms are present";
  } else if (matchedSymptoms.length >= 4 && totalMatches >= 5) {
    clinicalInterpretation = "Symptom combination is clinically compatible";
  }

  // ==========================
  // RECOMMENDATION & RECOVERY
  // ==========================
  let recommendation = "Rest and supportive care recommended";
  if (emergencyDetected) {
    recommendation = matchedRedFlags.length >= 1 ? "Immediate hospital consultation recommended" : "Urgent medical evaluation recommended";
  } else if (disease.severity === "severe") {
    recommendation = "Urgent physician consultation recommended";
  } else if (disease.severity === "moderate") {
    recommendation = "Medical follow-up recommended";
  }

  let emergencyReason = matchedRedFlags.length >= 1 ? `Emergency indicators detected: ${matchedRedFlags.map(flag => flag.replace(/_/g, " ")).join(", ")}` : "";
  let recoveryAssessment = "Recovery status unclear";
  if (disease.recovery_signs) {
    const recoveryMatches = Object.keys(disease.recovery_signs).filter(key => matchedSymptoms.includes(key));
    if (recoveryMatches.length >= 2) recoveryAssessment = "Signs of gradual recovery detected";
  }

  const recommendedTests = Object.keys(disease.tests || {}).slice(0, 5);
  let confidenceExplanation = score >= 85 && matchedSymptoms.length >= 5 ? "Very strong clinical correlation" : 
                              score >= 70 && matchedSymptoms.length >= 4 ? "Strong diagnostic correlation" : 
                              score >= 50 ? "Moderate diagnostic correlation" : "Weak but possible correlation";

  let contradictionExplanation = contradictionLevel === "high" ? "Several findings contradict this diagnosis" : 
                                 contradictionLevel === "medium" ? "Some findings partially contradict this diagnosis" : "";

  // ==========================
  // MEDICINE & DATA EXTRACTION
  // ==========================
  const {
    symptoms, tests, causes, risk_factors, physical_exam, red_flags,
    symptom_clusters, required_symptoms, required_negative_symptoms,
    disease_meaning, treatments, lifestyle_changes,
    homeopathic_medicines, ayurvedic_medicines,
    prescription_medicines, supportive_medicines, // নতুন ফিল্ডস যোগ করা হয়েছে
    ...autoFields
  } = disease;

  return {
    ...autoFields,
    // মেডিসিন ক্যাটাগরিগুলো রিটার্ন করা হচ্ছে
    prescription_medicines: prescription_medicines || [],
    supportive_medicines: supportive_medicines || [],
    homeopathic_medicines: homeopathic_medicines || [],
    ayurvedic_medicines: ayurvedic_medicines || [],
    
    disease_meaning: disease_meaning || DISEASE_MEANINGS[disease.disease] || [],
    treatments: treatments || TREATMENTS[disease.disease] || [],
    lifestyle_changes: lifestyle_changes || LIFESTYLE_CHANGES[disease.disease] || [],

    confidence: Math.round(score),
    rawScore: score,
    confidenceLabel,
    confidenceExplanation,
    matchCount: totalMatches,
    reason,
    clinicalInterpretation,
    recommendation,
    emergency: emergencyDetected,
    emergencyReason,
    recoveryAssessment,
    differentialDiagnosis,
    recommendedTests,
    matchedClusters,
    clusterStrength,
    clusterAnalysis,
    matchedRequiredSymptoms,
    requiredMatchCount: requiredMatchPercent,
    negativeSymptomCount,
    specificSymptomCount,
    matchedSymptoms,
    matchedTests,
    matchedRiskFactors,
    matchedCauses,
    matchedPhysicalExam,
    matchedComplications,
    matchedRedFlags,
    contradictions,
    contradictionLevel,
    totalContradictions,
    contradictionExplanation
  };
}
