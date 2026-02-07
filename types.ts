import React from 'react';

export enum Category {
  BEDROOM = 'Bedroom',
  KITCHEN = 'Kitchen',
  LIVING_ROOM = 'Living Room',
  WARDROBE = 'Wardrobe'
}

export interface PortfolioItem {
  id: string;
  category: Category;
  imageUrl: string;
  title: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string;
}

export interface Feature {
  icon: React.ElementType;
  title: string;
  description?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}