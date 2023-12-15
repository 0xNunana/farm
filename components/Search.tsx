import React from 'react'

const Search = () => {
  return (
    <form className='  grid gap-2 md:inline-flex rounded-full shadow-lg lg:w-[60%]'>
       <input type='text' placeholder='search product here ' className='w-full rounded-l-full px-4 py-2 lg:h-16'/>
        <button type='submit' className='rounded-r-full bg-yellow px-6 py-2'>
            Search
        </button>
        </form>
  )
}

export default Search