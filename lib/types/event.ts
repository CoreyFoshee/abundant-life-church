export type Event = {
  id: string;
  title: string;
  slug: string;
  date: string;
  endDate?: string;
  location: string;
  description: string;
  image?: string;
  featured: boolean;
  externalLink?: string;
};
