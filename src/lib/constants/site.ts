export const SITE_CONFIG = {
  name: "Mamitas Caffe & Bar",
  tagline: "Sabores de Venezuela en el corazón de Lugano",
  taglineIt: "Sapori del Venezuela nel cuore di Lugano",
  url: "https://mamitascaffe.ch",
  logo: "/images/logo.svg",
  instagram: "@mamitas_caffebar",
  address: {
    street: "Via al Forte 10",
    city: "Lugano",
    canton: "TI",
    country: "Switzerland",
    postalCode: "6900",
    googleMapsUrl:
      "https://maps.google.com/?q=Via+al+Forte+10,+6900+Lugano,+Switzerland",
    googleMapsEmbed:
      "https://maps.google.com/maps?q=Via+al+Forte+10,+6900+Lugano,+Switzerland&output=embed&z=16",
  },
  contact: {
    phone: "+41 91 922 00 59",
    whatsapp: "+41 76 464 09 05",
    email: "eslynaga@gmail.com",
  },
  hours: [
    { day: "Lunes – Viernes", dayIt: "Lunedì – Venerdì", time: "08:00 – 23:00" },
    { day: "Sábado", dayIt: "Sabato", time: "09:00 – 23:00" },
    { day: "Domingo", dayIt: "Domenica", time: "10:00 – 23:00" },
  ],
  social: {
    instagram: "https://instagram.com/mamitas_caffebar",
    facebook: "https://facebook.com/mamitascaffebar",
    tiktok: "https://tiktok.com/@mamitas_caffebar",
    whatsapp:
      "https://wa.me/41764640905?text=Ciao%20Mamitas!%20Vorrei%20informazioni",
  },
} as const;
