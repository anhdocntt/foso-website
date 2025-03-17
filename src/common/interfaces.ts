export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  totalPost: number;
}