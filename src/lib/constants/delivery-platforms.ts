/**
 * Configuración de plataformas de delivery.
 *
 * Para ACTIVAR/DESACTIVAR una plataforma:
 *   enabled: true  → se renderiza la card
 *   enabled: false → no aparece en la página
 *
 * Para añadir el link real:
 *   Reemplaza el placeholder TODO_ADD_*_LINK con la URL de tu restaurante
 *   en cada plataforma.
 *
 * El campo `descKey` mapea a la clave en it.json/es.json:
 *   delivery.platforms[index].desc
 */

export type DeliveryPlatform = {
  id: string;
  name: string;
  enabled: boolean;
  href: string;
  brandColor: string;
  bgColor: string;
  descIndex: number;
};

export const DELIVERY_PLATFORMS: DeliveryPlatform[] = [
  {
    id: "smood",
    name: "Smood",
    enabled: true,
    href: "TODO_ADD_SMOOD_LINK",
    brandColor: "#FF5A00",
    bgColor: "#fff3ee",
    descIndex: 0,
  },
  {
    id: "uber-eats",
    name: "Uber Eats",
    enabled: true,
    href: "TODO_ADD_UBER_EATS_LINK",
    brandColor: "#000000",
    bgColor: "#f9f9f9",
    descIndex: 1,
  },
  {
    id: "just-eat",
    name: "Just Eat",
    enabled: true,
    href: "TODO_ADD_JUST_EAT_LINK",
    brandColor: "#FF8000",
    bgColor: "#fff6ee",
    descIndex: 2,
  },
];

export const ACTIVE_PLATFORMS = DELIVERY_PLATFORMS.filter((p) => p.enabled);
