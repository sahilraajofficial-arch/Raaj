export const getDriveImage = (id: string): string => {
  // Using the direct download link format which often works well for embedding
  return `https://drive.google.com/uc?export=view&id=${id}`;
};

export const CONTACT_PHONE = "+919117377527";
export const CONTACT_WHATSAPP = "919117377527"; // Clean number for WA link
export const WHATSAPP_URL = `https://wa.me/${CONTACT_WHATSAPP}?text=Hi,%20I'm%20interested%20in%20your%20furniture%20services.`;
