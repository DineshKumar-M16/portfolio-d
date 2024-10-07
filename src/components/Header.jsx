import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
   const [togglemenu,settogglemenu] =useState (false)
    return <header className="flex justify-between px-5 py-3 bg-primary">
        <a  className="font-bold text-black" href="#">Dinesh kumar</a>
        <nav className="hidden md:block">

        
        <ul className="flex  text-black"> 
            <li c><a href="/" className='hover:text-white'>Home</a></li>
            <li><a href="#about" className='hover:text-white'>About</a></li>
            
            <li><a href="#projects" className='hover:text-white'>Projects</a></li>
            
            <li><a href="#resume" className='hover:text-white' >Resume</a></li>

            <li><a href="#contact" className='hover:text-white' >contact</a></li>

        </ul>
        </nav> 
        {togglemenu && <nav className="block md:hidden">

        
        <ul onClick={()=> settogglemenu(!togglemenu)} className="flex flex-col text-white mobile-nav"> 
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">resume</a></li>
            <li><a href="#contact">Contact</a></li>

        </ul>
        </nav>}
        <button onClick={()=>settogglemenu(!togglemenu)} className='block md:hidden'><Bars3Icon className='text-white h5'/></button>
    </header>
}