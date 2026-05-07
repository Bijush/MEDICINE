function normalize(str){
  return (str || "").toString().toLowerCase().trim();
}

function toArray(val){
  if(Array.isArray(val)) return val;
  if(val === undefined || val === null) return [];
  return [val];
}

export function autoDiagnose(answers, DISEASES){

  const a = Object.fromEntries(
    Object.entries(answers || {}).map(([k,v]) => [k, normalize(v)])
  );

  Object.keys(a).forEach(k => {
    if(!a[k]) delete a[k];
  });

  const symptomCount = Object.keys(a).length;

  let results = [];

  DISEASES.forEach(d => {

    // ================= MUST =================
    if(d.must){
      const ok = d.must.every(f => a[f]);
      if(!ok) return;
    }

    let score = 0;
    let maxScore = 0;
    let matchCount = 0;

    const reasons = [];

    (d.rules || []).forEach(rule => {

      const fieldVal = normalize(a[rule.field]);
      const values = toArray(rule.value).map(normalize);
      const weight = rule.weight || 1;

      maxScore += weight;

      // ================= MATCH =================

      // 🥇 exact
      if(values.includes(fieldVal)){
        score += weight;
        matchCount++;
        reasons.push(`✔ ${rule.field} = ${fieldVal}`);
        return;
      }

      // 🥈 partial (real partial)
      if(fieldVal && values.some(v => fieldVal.includes(v))){
        score += weight * 0.5;
        matchCount++;
        reasons.push(`≈ ${rule.field} ~ ${fieldVal}`);
        return;
      }

      // 🟥 negative
      if(rule.not){
        const notVals = toArray(rule.not).map(normalize);
        if(notVals.includes(fieldVal)){
          score -= weight;
          reasons.push(`❌ ${rule.field} ≠ ${fieldVal}`);
          return;
        }
      }

      // 🔴 penalty ONLY if user provided field
      if(fieldVal){
        score -= weight * 0.2;
      }

    });

    // ================= SMART SAFETY =================

    // 🔥 require minimum match
    if(matchCount === 0) return;

    // 🔥 strong disease needs more evidence
    if(d.severity === "strong" && matchCount < 2){
      score *= 0.3;
    }

    // 🔥 medium protection
    if(d.severity === "medium" && matchCount < 2){
      score *= 0.6;
    }

    // 🔥 low symptom protection
    if(symptomCount < 2){
      score *= 0.5;
    }

    // 🔥 skip weak
    if(score <= 0) return;

    // ================= CONFIDENCE =================

    let confidence = maxScore
      ? Math.round((score / maxScore) * 100)
      : 0;

    // 🔥 realism cap
    if(matchCount < 2){
      confidence *= 0.6;
    }

    confidence = Math.min(85, Math.round(confidence));

    results.push({
      ...d,
      score,
      confidence,
      reasons
    });

  });

  // ================= THRESHOLD =================
  results = results.filter(d => d.score >= 2);

  // ================= SORT =================
  results.sort((a,b)=> {
    const pA = a.priority || 5;
    const pB = b.priority || 5;
    if(pB !== pA) return pB - pA;
    return b.score - a.score;
  });

  // ================= LIMIT =================
  results = results.slice(0, 5);

  // ================= FALLBACK =================
  if(results.length === 0){
    results.push({
      id: "fallback",
      name: "General condition",
      severity: "mild",
      score: 1,
      confidence: 25,
      reasons: ["⚠️ Not enough symptoms"]
    });
  }

  return results;
}