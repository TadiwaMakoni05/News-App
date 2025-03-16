import React, { useContext, useEffect, useRef } from 'react'
import { ApplicationContext } from '../context/ApplicationContext'
import { IoMoonOutline,IoSunnyOutline } from "react-icons/io5";

const NavBar = () => {
    const navRef = useRef()
    const {theme ,toggleTheme} = useContext(ApplicationContext)

    const handleScroll = () => {
        if (window.scrollY > 100){
            navRef.current.classList.add('navbar-active')
        } else {
            navRef.current.classList.remove('navbar-active')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


  return (
<div ref={navRef} className={`navbar md:flex md:justify-between md:items-center p-4 fixed top-0 w-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
    {/* Hidden checkbox to toggle menu */}
    <input type="checkbox" id="menu-toggle" className="hidden peer" />

    {/* Logo */}
    <div className="logo text-xl md:text-2xl font-bold ">News</div>
<div className='flex flex-row justify-end'>
      {/* Theme Toggle Button */}
  <button onClick={toggleTheme} className="absolute right-60 top-4 bg-gray-800  px-3 py-1 rounded-md md:right-60 md:top-4">
        {theme === "dark" ? <IoSunnyOutline className='bg-none'/> : <IoMoonOutline className='bg-none'/>}
      </button>
    {/* Menu Toggle Button */}
    <label htmlFor="menu-toggle" className="cursor-pointer sm:block md:hidden absolute right-6 top-4  text-2xl peer-checked:hidden font-semibold">
        ☰
    </label>

    {/* Close Button - Only visible when menu is open */}
    <label htmlFor="menu-toggle" className="cursor-pointer hidden peer-checked:block md:hidden absolute right-6 top-4 font-extrabold text-2xl">
        X
    </label>
</div>

    {/* Menu Container */}
    <div className={`hidden transition-all duration-100 delay-75 peer-checked:flex peer-checked:flex-col ${theme === "dark" ? "peer-checked:bg-black text-white" : "peer-checked:bg-white text-black"}  peer-checked:absolute peer-checked:top-full peer-checked:left-0 peer-checked:w-full peer-checked:h-screen md:flex md:flex-row gap-4  p-4 `}>
        <hr className='md:hidden'/>
        <div className="mx-2 hover:text-blue-500">Home</div>
        <div className="mx-2 hover:text-blue-500">Sports</div>
        <div className="mx-2 hover:text-blue-500">Business</div>
        <div className="mx-2 hover:text-blue-500">Technology</div>
        <hr className='md:hidden'/>

    </div>
</div>


  )
}

export default NavBar
