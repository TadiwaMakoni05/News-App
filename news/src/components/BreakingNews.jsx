import React, { useContext } from 'react'
import { ApplicationContext } from '../context/ApplicationContext'


const BreakingNews = () => {
    const {single} = useContext(ApplicationContext)
  
  return (
    <div className="my-6">
      <h1 className="my-1 text-base md:text-lg font-bold">Breaking News</h1>
      {
          <a href={single.url} target='_blank'>
          <img src={single.urlToImage} alt="" className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-cover " />
          <p className="my-2 text-xs md:text-sm font-bold w-[70%]">
          {single.title}
          </p>
          <p className="my-2 text-xs md:text-sm  w-[70%]">
          {single.description}
          </p>
          {/* <a href={single.url} className='text-blue-900 font-bold'>Read More</a> */}
          </a>
      }

    </div>
  );
};

export default BreakingNews;
