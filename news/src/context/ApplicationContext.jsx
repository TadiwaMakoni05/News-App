import React, { createContext, useEffect, useState } from 'react'
export   const ApplicationContext  = createContext()

const ApplicationContextProvider = ({children}) => {
    const [articles,setArticles] = useState([])
    const [single,setSingle] = useState([])
    const apikey = 'e9bb601209114e28ba9984b7fe0a1ceb'

    const url1 =   `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}   `
    const url2 =   `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apikey} `

    let num = Math.floor(Math.random() * 6 +1)
    useEffect(()=>
        {
        const fetchNews1 = ()=> {fetch(url1)
        .then(res => res.json())
        .then(data => {
            console.log(data.articles)
            setArticles(data.articles)
            setSingle(data.articles[num])
        })}
        const fetchBBCNews = ()=> {fetch(url2)
            .then(res => res.json())
            .then(data => {
                console.log(data.articles)
                setArticles(data.articles)

            })}
        fetchBBCNews()
        fetchNews1()

        },[])

    const contextValue = {
        articles,single
    }
    return (
        <ApplicationContext.Provider value={contextValue}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContextProvider





