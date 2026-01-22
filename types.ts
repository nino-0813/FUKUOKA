
export interface NewsItem {
  id: number;
  title: string;
  image: string;
  category?: string;
}

export interface SalonLocation {
  city: string;
  details?: string;
  isFukuoka?: boolean;
}
