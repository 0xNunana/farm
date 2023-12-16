// pages/index.tsx
'use client'
import React, { useState } from 'react';
import Search from '@/components/Search';
import Display from '@/components/Display';

const Page: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = (results: any[]) => {
    setSearchResults(results);
  };

  return (
    <main className=''>
      <div className="py-5">
        <Search onSearch={handleSearch} />
      </div>
      <div >
        <Display results={searchResults} />
      </div>
    </main>
  );
};

export default Page;
