import React from 'react'

const Search = () => {
  return (
    <form className='rounded-full  flex shadow-lg w-[60%]'>
       <input type='text' placeholder='search product here ' className='w-full rounded-l-full px-4 py-2 h-16'/>
        <button type='submit' className='border-r-full px-6 py-2'>
            Search
        </button>
        </form>
  )
}

export default Search