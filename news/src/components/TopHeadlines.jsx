
// import blog_pic_7 from '../assets/blog_pic_7.png'
import React, { useContext } from 'react'
import { ApplicationContext } from '../context/ApplicationContext'
// import blog_pic_8 from '../assets/blog_pic_8.png'
// import blog_pic_9 from '../assets/blog_pic_9.png'
// import blog_pic_10 from '../assets/blog_pic_10.png'
// import blog_pic_11 from '../assets/blog_pic_11.png'
// import blog_pic_12 from '../assets/blog_pic_12.png'
// import blog_pic_13 from '../assets/blog_pic_13.png'
// import blog_pic_14 from '../assets/blog_pic_14.png'
// import blog_pic_15 from '../assets/blog_pic_15.png'
// import blog_pic_16 from '../assets/blog_pic_16.png'



const TopHeadlines = () => {
  const {articles} = useContext(ApplicationContext)

  return (
    <div className='hidden lg:block lg:max-w-[500px] lg:max-h-[450px]'>
      <h1 className='text-lg font-bold'>Top Headlines</h1>
      <div className='overflow-y-scroll h-[400px]'>
          {articles.map((article,index) => {
            return(
                  <a href={article.url} target='_blank'  key={index +'article'} className='flex justify-between items-center'>
                  <img src={article.urlToImage} alt="" className='w-[90px] h-[90px] object-cover'/>
                  <div className='m-2 hover:text-blue-900'>
                    <h2 className='text-sm font-bold'>{article.title}</h2>
                    <p className='text-xs'>{article.description}</p>
                    {/* <a href={article.url} target='_blank' className='px-1 py-1 bg-white text-black text-xs'>Read More</a> */}
                  </div>  
                </a>
          )})

          }





    </div>
        </div>
    
  )
}

export default TopHeadlines
