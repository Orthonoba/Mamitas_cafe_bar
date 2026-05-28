export type BirthdayPackageId = "mini" | "latin" | "premium";

export interface BirthdayPackageFeature {
  included: boolean;
  label: string;
}

export interface BirthdayPackage {
  id: BirthdayPackageId;
  name: string;
  subtitle: string;
  price: number;
  priceNote?: string;
  color: string;
  accentColor: string;
  icon: string;
  features: BirthdayPackageFeature[];
  isPopular?: boolean;
}

export interface BirthdayFormData {
  parentName: string;
  childName: string;
  childAge: number;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  guestCount: number;
  packageId: BirthdayPackageId;
  specialRequests?: string;
}
