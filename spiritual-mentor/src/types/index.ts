export interface Priest {
  id: number;
  name: string;
  confession: Confession;
  denomination: string;
  location: string;
  bio: string;
  imageUrl: string;
  rating: number;
  experienceYears: number;
}

export type Confession = 'Православие' | 'Католицизм' | 'Протестантизм';

export interface Post {
  id: number;
  priestId: number;
  priestName: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

export interface Comment {
  id: number;
  postId: number;
  authorName: string;
  content: string;
  date: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'priest';
  favorites: number[];
}
