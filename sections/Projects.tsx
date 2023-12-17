import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import React from 'react'

const Projects = () => {
  return (
    <div className='bg-deep-green py-20' id='projects'>
      <div className='max-w-7xl mx-auto px-3 text-white'>
        <p className='text-center text-sm md:text-base'>Dedicated work </p>
        <p className='text-center font-extrabold text-xl md:text-3xl lg:text-5xl py-4'>Explore Our Communal Projects</p>
        <div className='flex  overflow-hidden gap-3 overflow-x-scroll '>
    {projects.map(item=>(
      <ProjectCard key={item.id} item={item} />
    ))}
    
       
         
        
     

        </div>
      </div>
    </div>
  )
}

export default Projects