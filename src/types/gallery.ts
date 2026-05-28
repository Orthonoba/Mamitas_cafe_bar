export type GalleryTag =
  | "food"
  | "ambiance"
  | "events"
  | "arepas"
  | "desserts"
  | "drinks"
  | "birthdays";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  tags: GalleryTag[];
  caption?: string;
  instagramUrl?: string;
}
