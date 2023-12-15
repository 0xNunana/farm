import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div className='bg-[#334b35]/80 py-10'>
        <p className='text-center text-yellow font-semibold text-xl'>Trusted By</p>
        <div className='max-w-7xl mx-auto px-3 flex gap-5 justify-center'>
            <div>
                <Image src='/logo/moh.png' alt='health' width={100} height={200}  className='rounded-full'/>
            </div>
            <div>
                <Image src='/logo/eco.png' alt='health' width={100} height={200}  className='rounded-full'/>
            </div>
            <div>
                <Image src='/logo/gepa.jpg' alt='health' width={100} height={200}  className='rounded-full'/>
            </div>
            <div>
                <Image src='/logo/gipc.jpg' alt='health' width={100} height={200}  className='rounded-full'/>
            </div>
            <div>
                <Image src='/logo/fia.png' alt='health' width={100} height={200}  className='rounded-full'/>
            </div>
        </div>
    </div>
  )
}

export default Partners