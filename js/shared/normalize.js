// ================= NORMALIZE =================

export function normalize(str = ""){

  return str
    .toString()
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "_")
    .trim();

}