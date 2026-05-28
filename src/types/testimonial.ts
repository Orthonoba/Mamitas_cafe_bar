export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  rating: number;
  text: string;
  textIt?: string;
  date: string;
  platform: "google" | "instagram" | "tripadvisor" | "direct";
  avatarInitials?: string;
}
