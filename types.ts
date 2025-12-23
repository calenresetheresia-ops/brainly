
export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorTitle: string;
  thumbnail: string;
  price: number;
  rating: number;
  students: number;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Post {
  id: string;
  author: string;
  authorAvatar: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  image?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
