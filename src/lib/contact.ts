export const PHONE = "+91 99534 93171";
export const PHONE_TEL = "+919953493171";
export const WHATSAPP_NUMBER = "919953493171";
export const ADDRESS =
  "Village Shudharang, Post Office & Tehsil Reckong Peo, Kalpa, Himachal Pradesh – 172107";
export const PROPERTY_NAME = "KinVatika Homestay";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const enquiryLink = whatsappLink(
  "Hello KinVatika Homestay! I would like to check availability and best price for my stay in Kalpa, Kinnaur.",
);
