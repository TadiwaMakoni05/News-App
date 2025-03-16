import React, { useEffect, useRef } from 'react'

const NavBar = () => {
    const navRef = useRef()

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
<div ref={navRef} className="navbar md:flex md:flex-row md:justify-between md:items-center p-4 fixed top-0 w-screen bg-black">
    {/* Hidden checkbox to toggle menu */}
    <input type="checkbox" id="menu-toggle" className="hidden peer" />

    {/* Logo */}
    <div className="logo text-xl md:text-2xl font-bold text-white">News</div>

    {/* Menu Toggle Button */}
    <label htmlFor="menu-toggle" className="cursor-pointer sm:block md:hidden absolute right-6 top-4 text-white text-2xl peer-checked:hidden font-semibold">
        ☰
    </label>

    {/* Close Button - Only visible when menu is open */}
    <label htmlFor="menu-toggle" className="cursor-pointer hidden peer-checked:block md:hidden absolute right-6 top-4 text-white font-extrabold text-2xl">
        X
    </label>

    {/* Menu Container */}
    <div className="hidden transition-all duration-100 delay-75 peer-checked:flex peer-checked:flex-col peer-checked:bg-black peer-checked:absolute peer-checked:top-full peer-checked:left-0 peer-checked:w-full peer-checked:h-screen md:flex md:flex-row text-white gap-4  p-4 ">
        <div className="mx-2 hover:text-blue-500">Home</div>
        <div className="mx-2 hover:text-blue-500">Sports</div>
        <div className="mx-2 hover:text-blue-500">Business</div>
        <div className="mx-2 hover:text-blue-500">Technology</div>
    </div>
</div>


  )
}

export default NavBar
