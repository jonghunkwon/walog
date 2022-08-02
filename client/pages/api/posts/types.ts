import { openGraph, Social, Link } from '../types';

interface PostItem {
  title: string;
  description: string;
  author: string;
  date: string;
  content: string;
  category: string;
  tags: Array<string>;
  openGraph: openGraph;
  twitter: openGraph;
  social: Social;
  prev: Link;
  next: Link;
}
