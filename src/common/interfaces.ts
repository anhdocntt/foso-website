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

export interface TableContent {
  id: string;
  title: string;
}

export interface Social {
  name: string;
  icon: string;
  link: string;
}

export interface Reaction {
  id: string;
  emoji: string;
  label: string;
  count: number;
  isSelected?: boolean;
}