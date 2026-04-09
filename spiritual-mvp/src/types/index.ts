export interface Priest {
  id: number;
  name: string;
  denomination: 'Православие' | 'Католицизм' | 'Протестантизм';
  city: string;
  experience: number;
  rating: number;
  description: string;
  avatar: string;
}

export interface Post {
  id: number;
  authorId: number;
  authorName: string;
  title: string;
  content: string;
  date: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
}
