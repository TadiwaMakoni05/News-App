import React, { useRef} from 'react'
import twitter_icon from "../assets/twitter_icon.png";
import facebook_icon from "../assets/facebook_icon.png";

const Footer = () => {
    const year = useRef(new Date().getFullYear())
  return (
    <>
    <div className='footer grid grid-cols-2 gap-4 md:grid md:grid-cols-4 md:gap-4 p-4 m-4 justify-between items-center w-[100vw]'>
        <div className='m-4 p-4'>
            <h1 className='text-sm md:text-xl font-bold my-1'>Catergories</h1>
            <p className= 'text-sm md:text-base hover:text-blue-900 my-1'>Sports</p>
            <p className= 'text-sm md:text-base hover:text-blue-900 my-1'>Business</p>
            <p className= 'text-sm md:text-base hover:text-blue-900 my-1'>Technology</p>
        </div>
        <div className='m-4 p-4'>
            <h1 className='text-sm md:text-xl font-bold my-1'>Contact Us</h1>
            <p className= 'text-sm md:text-base my-1'>Phone No: +263 773 456 321</p>
            <p className= 'text-sm md:text-base my-1'>Email: news@gmail.com</p>
            <p className= 'text-sm md:text-base my-1'>Address:Harare Zimbabwe</p>
        </div>
        <div className="m-4 p-4 flex ">
        <h1 className='text-sm md:text-xl font-bold'>Follow Us on:</h1>
            <img src={twitter_icon} alt="" className=' w-7 h-7 md:w-10  md:h-10 cursor-pointer' />
            <img src={facebook_icon} alt="" className=' w-7 h-7 md:w-10  md:h-10 cursor-pointer' />
        </div>
        <div className='m-4 p-4'>
            <h1 className='text-sm md:text-xl font-bold'>Subscribe to our NewsLetter</h1>
            <p className='flex flex-col sm:flex sm:flex-col md:flex md:flex-row  gap-1'>
            <input type="text" placeholder='Enter your email' className='border-2 border-black p-1 md:p-2 rounded text-black'/>
            <button className=' text-white px-2 py-1 border border-white rounded hover:text-black hover:bg-white'>Subscribe</button>
            </p>
        </div>
    </div>
    <div className='footer flex flex-col  md:flex md:flex-row md:justify-around md:items-center p-4  text-white gap-4 text-sm md:text-xl'>
            <p>News App. Developed by: <a href='https://github.com/TadiwaMakoni05' target='_blank' className='text-blue-600 font-bold hover:text-blue-900'>Tadiwanashe Makoni </a> </p>
            <p> Copyrights Reserved &copy; {year.current}</p>
    </div>
    </>
  )
}

export default Footer
