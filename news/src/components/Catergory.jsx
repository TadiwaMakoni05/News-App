import React, { useContext } from 'react'
import { ApplicationContext } from '../context/ApplicationContext'
// import blog_icon_2 from "../assets/blog_pic_2.png";
// import blog_icon_3 from "../assets/blog_pic_3.png";
// import blog_icon_4 from "../assets/blog_pic_4.png";
// import blog_icon_5 from "../assets/blog_pic_5.png";
// import blog_icon_6 from "../assets/blog_pic_6.png";




const Catergory = () => {
      const {articles,theme} = useContext(ApplicationContext)

  return (
    <div className={`m-9 p-4 flex flex-col md:flex md:flex-col ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        <h1 className='text-lg md:text-xl font-bold'>Articles For You</h1>
        <div className='grid grid-cols-2 gap-8 lg:grid lg:grid-cols-4 lg:gap-4'>
        {
            articles.map((article,index)=>{
                return(
                    <a href={article.url} target='_blank' key={index + 'bbcnews'} className='card flex flex-col sm:w-[250px] sm:h-[250px]  w-[200px] h-[200px] gap-8 md:w-[300px] md:h-[300px]'>
                    <img src={article.urlToImage} alt="" className='w-[150px] h-[150px] object-cover' />
                    <p className='text-xs lg:text-sm hover:text-blue-900 w-[100px]'>
                    {article.title.slice(0,50)}
                    </p>
                </a>
                )
            })
        }

        

        </div>
    </div>
  )
}

export default Catergory
