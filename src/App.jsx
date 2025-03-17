import React from 'react'
import NavBar from './components/NavBar'
import TopHeadlines from './components/TopHeadlines'
import Catergory from './components/Catergory'
import Footer from './components/Footer'
import BreakingNews from './components/BreakingNews'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar />
      <div className="flex flex-row gap-2 md:flex md:flex-row md:gap-4 m-9 md:justify-between md:items-center p-4">
      <BreakingNews />
      <TopHeadlines/>
      </div>
      <Catergory/>
      <Footer />
    </div>
  )
}

export default App
