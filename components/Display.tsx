
'use client'
// components/Display.tsx
import { displayView } from '@/util/Action';
import Image from 'next/image';
import React,{useState,useEffect} from 'react';
import DisplayCard from './DisplayCard';

interface DisplayProps {
  results: any[];
}

const Display: React.FC<DisplayProps> = ({ results }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await displayView();
      console.log('Data', newData);
      setData(newData);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2 className='my-5'>Search Results</h2>
      {/* Display search results */}
      <div className=' grid sm:grid-cols-3 lg:grid-cols-4 gap-5'>
      {results.length > 0 ? (
  // Display search results
  results.map((item) => (
    <DisplayCard item={item} key={item.id}/>
  ))
) : (
  // Display default results from displayView
  data.map((item) => (
   <DisplayCard item={item} key={item.id}/>
  ))
)}

      </div>
    
    </div>
  );
};

export default Display;
