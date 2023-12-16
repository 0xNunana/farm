import React from 'react'
import { PiSpinnerGapBold } from "react-icons/pi";

const loading = () => {
  return (
    <div className='flex justify-center mt-20'>
      <div>
    <div className='flex justify-center'>
    <PiSpinnerGapBold className='animate-spin text-5xl text-deep-green'/>
    </div>
 

<p>Loading page. Please wait....</p>
      </div>

    </div>
  )
}

export default loading