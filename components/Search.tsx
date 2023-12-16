'use client'

// components/Search.tsx
import React, { useState, SyntheticEvent } from 'react';
import { searchProduct } from '@/util/Action';

interface SearchProps {
  onSearch: (results: any[]) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  
  const [searchItem,setSearcItem]=useState('')

  const handleSearch = (event: SyntheticEvent) => {
    event.preventDefault();
  const data = searchProduct(searchItem)
  onSearch(data)
  };

  return (
    <form onSubmit={handleSearch} className='grid gap-2 md:inline-flex rounded-full shadow-lg lg:w-[60%]'>
      <input
        type='text'
        name='searchItem'
        value={searchItem}
        onChange={(e)=>setSearcItem(e.target.value)}
        placeholder='Search product here'
        className='w-full rounded-l-full pl-6 py-2 lg:h-16'
      />
      <button type='submit' className='rounded-r-full bg-yellow px-6 py-2'>
        Search
      </button>
    </form>
  );
};

export default Search;
