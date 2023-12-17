import { projectsType } from '@/data/projects'
import Image from 'next/image'
import React from 'react'

const ProjectCard = ({item}:{item:projectsType}) => {
  return (
    <div className='rounded-lg relative  flex shrink-0 '>
        <div>
        <Image src={item.image} alt='hand' width={270} height={500} className='rounded-lg max-sm:w-[120px] sm:w-[170px] md:w-[210px] lg:w-[270px]'/>
<div className='absolute bottom-0 bg-black/50 w-full p-2'>
<p className='text-yellow'>{item.title}</p>
<p className='hidden md:w-[70%] text-white'>
   {item.description}
</p>
</div>
        </div>

    </div>
  )
}

export default ProjectCard