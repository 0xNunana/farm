

import { vegetables } from '@/data/vegetables';

export const searchProduct = (searchName:string) => {
  const searchTerm =searchName.toLowerCase()


  if (searchTerm) {
    const results = vegetables.filter((vegetable) =>
      vegetable.name.toLowerCase().includes(searchTerm)
    );
    console.log('Search Results', results);
    return results;
  }

  // If searchTerm is empty, return all vegetables
  console.log('Vegetables',vegetables)
  return vegetables;
};

export const displayView =()=>{
  return vegetables
}
