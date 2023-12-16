
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import Partners from '@/sections/Partners'
import Products from '@/sections/Products'
import Projects from '@/sections/Projects'
import Testimonial from '@/sections/Testimonial'
import Video from '@/sections/Video'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen'>
    <Header/>
    <Hero/>
    <About/>
    <Products/>
    <Partners/>
    <Video/>
    <Projects/>
    <Testimonial/>
    
<Footer/>
    </main>
  )
}
