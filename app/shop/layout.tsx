import { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Menu from "@/components/Menu";
import Search from "@/components/Search";


export const metadata: Metadata = {
    title: 'Shop | Nunana Farms',
    description: 'Household brand for fresh food',
  }
  
  export default function ShopLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     
        <>
      
          <div className="flex h-screen">
      {/* Left Menu */}
     <Menu/>

      {/* Main Content */}
      <main className="flex-1 p-10 gap-5 bg-gray-200">
      <div className="py-5">
      <Search/>
      </div>
     
   
   
        {children}
      </main>
    </div>
       
          </>
   
    )
  }