export interface Game {
  id: string;
  title: string;
  genre: string[];
  status: 'in-development' | 'coming-soon';
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

