export function getStrengthScore(m, disease){

  const map = {
    "mild": 1,
    "medium": 2,
    "strong": 3,
    "very-strong": 4
  };

  const medStrength = m.strength || m.severity || "mild";
  const medVal = map[medStrength] || 1;

  // 🔥 disease severity (important)
  const diseaseSeverity = disease?.severity || "mild";
  const diseaseVal = map[diseaseSeverity] || 1;

  let score = 0;

  // ================= 🎯 PERFECT MATCH =================
  if(medVal === diseaseVal){
    score += 10;
  }

  // ================= ⚖️ SLIGHT DIFFERENCE =================
  else if(Math.abs(medVal - diseaseVal) === 1){
    score += 4;
  }

  // ================= ❌ TOO STRONG =================
  else if(medVal > diseaseVal){
    score -= 8; // 🔥 safety
  }

  // ================= ❌ TOO WEAK =================
  else if(medVal < diseaseVal){
    score -= 4;
  }

  return score;
}