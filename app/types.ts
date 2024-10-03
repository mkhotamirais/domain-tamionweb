export interface CustomAuthor {
  name: string;
  url?: string;
  role?: string;
  image?: string;
  twitter?: string;
  contact?: {
    email?: string;
    phone?: string;
  };
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
  };
  socialProfiles?: {
    facebook?: string;
    linkedin?: string;
    github?: string;
  };
  description?: string;
  bio?: string;
  skills?: string[];
}
