
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import Products from '@/sections/Products'
import Projects from '@/sections/Projects'
import Testimonial from '@/sections/Testimonial'
import Video from '@/sections/Video'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen'>
    
    <Hero/>
    <About/>
    <Products/>
    <Video/>
    <Projects/>
    <Testimonial/>
    

    </main>
  )
}