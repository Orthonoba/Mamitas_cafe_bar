export const SITE_CONFIG = {
  name: "Mamitas Caffe & Bar",
  tagline: "Sabores de Venezuela en el corazón de Lugano",
  taglineIt: "Sapori del Venezuela nel cuore di Lugano",
  url: "https://mamitascaffe.ch",
  logo: "/images/logo.svg",
  instagram: "@mamitas_caffebar",
  address: {
    street: "Lugano",
    city: "Lugano",
    canton: "TI",
    country: "Switzerland",
    postalCode: "6900",
    googleMapsUrl: "https://maps.google.com/?q=Mamitas+Caffe+Bar+Lugano",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44094.56!2d8.9524!3d46.0037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47842dd91d2a9a91%3A0x9de9d72f51fd6e09!2sLugano!5e0!3m2!1sit!2sch!4v1",
  },
  contact: {
    phone: "+41 76 XXX XX XX",
    whatsapp: "+41760000000",
    email: "info@mamitascaffe.ch",
  },
  hours: [
    { day: "Lunes – Viernes", dayIt: "Lunedì – Venerdì", time: "08:00 – 18:00" },
    { day: "Sábado", dayIt: "Sabato", time: "09:00 – 20:00" },
    { day: "Domingo", dayIt: "Domenica", time: "10:00 – 17:00" },
  ],
  social: {
    instagram: "https://instagram.com/mamitas_caffebar",
    facebook: "https://facebook.com/mamitascaffebar",
    tiktok: "https://tiktok.com/@mamitas_caffebar",
    whatsapp: "https://wa.me/41760000000?text=Hola%20Mamitas!%20Quiero%20informaci%C3%B3n",
  },
} as const;
