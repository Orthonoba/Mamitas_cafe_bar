/**
 * ÚNICA FUENTE DE VERDAD para los horarios de Mamitas Caffe & Bar.
 *
 * Para cambiar al horario de INVIERNO (oct–mar):
 *   - Editar los campos `time` de cada entrada
 *   - Actualizar también openingHoursSpecification en src/lib/seo/json-ld.ts
 *
 * Las etiquetas de los días (lunes, sabato...) se traducen via next-intl:
 *   it.json / es.json → "hours.mondayFriday", "hours.saturday", "hours.sunday"
 */

export type DayKey = "mondayFriday" | "saturday" | "sunday";

export type BusinessHoursEntry = {
  dayKey: DayKey;
  time: string;
};

// HORARIO DE VERANO (abr–sep)
export const BUSINESS_HOURS: BusinessHoursEntry[] = [
  { dayKey: "mondayFriday", time: "08:00 – 23:00" },
  { dayKey: "saturday",     time: "09:00 – 23:00" },
  { dayKey: "sunday",       time: "10:00 – 23:00" },
];
