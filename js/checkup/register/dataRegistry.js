// ==============================
// FEVER
// ==============================

import { FEVER_FOLDER }
from "../../../data/checkup/fever/feverFolder.js";
// ==============================
// EYE
// ==============================

import { RED_EYE_HEADACHE }
from "../../../data/checkup/eye/redEyeData.js";

import { MIGRAINE_EYE_PAIN }
from "../../../data/checkup/eye/migraineEyePain.js";

// ==============================
// ENT
// ==============================

import { ALLERGIC_RHINITIS_SINUS }
from "../../../data/checkup/ent/allergicRhinitisSinus.js";

import { LIVER_FOLDER }
from "../../../data/checkup/liver/liverFolder.js";


import { RESPORITARY_FOLDER }
from "../../../data/checkup/respiratory/respiratoryFolder.js";



// ==============================
// STOMACH
// ==============================

import { STOMACH_FOLDER }
from "../../../data/checkup/stomach/stomachFolder.js";

// ==============================
// HEART
// ==============================
/*
import { HEART_ATTACK }
from "../../../data/checkup/heart/heartAttack.js";
*/
import { SKIN_FOLDER }
from "../../../data/checkup/skin/skinFolder.js";

// ==============================
// ALL DISEASES
// ==============================

export const ALL_DISEASES = [
  
 // ...FEVER_FOLDER,
  // ==========================
  // EYE
  // ==========================

  ...RED_EYE_HEADACHE,

  //...MIGRAINE_EYE_PAIN,

  // ==========================
  // ENT
  // ==========================

  ...ALLERGIC_RHINITIS_SINUS,
  //...LIVER_FOLDER,
  //...RESPORITARY_FOLDER,
  ...STOMACH_FOLDER,
 // ...SKIN_FOLDER,

  // ==========================
  // HEART
  // ==========================
/*
  ...HEART_ATTACK
  */
];