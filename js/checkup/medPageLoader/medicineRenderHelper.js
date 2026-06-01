// ==============================
// MEDICINE VALUE HELPER
// ==============================

export function renderMedicineValue(
  value
) {

  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }

  if (
    typeof value === "string"
  ) {
    return value;
  }

  if (
    typeof value === "number"
  ) {
    return String(value);
  }

  if (
    Array.isArray(value)
  ) {

    return value
      .map(item =>
        renderMedicineValue(item)
      )
      .join(", ");
  }

  if (
    typeof value === "object"
  ) {

    const en =
      value.en || "";

    const bn =
      value.bn || "";

    if (en || bn) {

      return `${en}${
        bn
          ? `<br><small>${bn}</small>`
          : ""
      }`;
    }

    return Object
      .entries(value)

      .map(
        ([key, val]) =>

          `<b>${key}:</b> ${
            renderMedicineValue(val)
          }`
      )

      .join("<br>");
  }

  return String(value);
}