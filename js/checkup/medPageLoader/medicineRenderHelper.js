// ==============================
// MEDICINE VALUE HELPER (MAX SINGLE-LINE SPACE)
// ==============================

export function renderMedicineValue(value) {
  if (value === null || value === undefined) {
    return "";
  }

  let finalContent = "";

  // ১. স্ট্রিং বা নাম্বারের জন্য প্রসেসিং
  if (typeof value === "string") {
    finalContent = value;
  } else if (typeof value === "number") {
    finalContent = String(value);
  } 
  // ২. অ্যারের জন্য প্রসেসিং
  else if (Array.isArray(value)) {
    finalContent = value.map(item => getRawMedicineValue(item)).join(", ");
  } 
  // ৩. অবজেক্টের জন্য প্রসেসিং (Bilingual/Multi-language Support)
  else if (typeof value === "object") {
    const en = value.en || "";
    const bn = value.bn || "";

    if (en || bn) {
      // display: block বাদ দিয়ে inline রাখা হয়েছে যাতে একই লাইনে সর্বোচ্চ টেক্সট ধরে
      finalContent = `
        <span class="med-val-en" style="font-weight: 500; color: #1f2937;">${en}</span>
        ${bn ? `<span class="med-val-bn" style="font-size: 12px; color: #059669; margin-left: 6px; background: #ecfdf5; padding: 1px 4px; border-radius: 3px; display: inline-block;">${bn}</span>` : ""}
      `;
    } else {
      // নিচে নিচে না দেখিয়ে এক লাইনে দেখানোর জন্য <br> এর বদলে কমা (, ) ব্যবহার করা হয়েছে
      finalContent = Object.entries(value)
        .map(([key, val]) => `<b style="color: #4b5563;">${key}:</b> ${getRawMedicineValue(val)}`)
        .join(", ");
    }
  } else {
    finalContent = String(value);
  }

  // যদি কোনো কন্টেন্ট তৈরি না হয়
  if (!finalContent.trim()) return "";

  // div-এর বদলে span ব্যবহার এবং মার্জিন মাত্র ৪ পিক্সেল করা হয়েছে যাতে লাইনের পুরো উইডথ ব্যবহার করা যায়
  return `
    <span class="med-value-display" style="font-size: 13px; color: #374151; margin-left: 4px; padding: 0; display: inline;">
      ${finalContent}
    </span>
  `;
}

/**
 * অ্যারে বা অবজেক্টের ভেতরের এলিমেন্টের জন্য বাটন ছাড়া শুধু raw টেক্সট বের করার হেল্পার ফাংশন
 */
function getRawMedicineValue(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map(item => getRawMedicineValue(item)).join(", ");
  if (typeof value === "object") {
    const en = value.en || "";
    const bn = value.bn || "";
    if (en || bn) return `${en}${bn ? ` (${bn})` : ""}`;
    return Object.entries(value).map(([key, val]) => `${key}: ${getRawMedicineValue(val)}`).join(", ");
  }
  return String(value);
}
