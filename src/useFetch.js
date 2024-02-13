import { useState, useEffect } from "react"

const useFetch = (url)=>{
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const abort = new AbortController()
        
        fetch(url, {signal: abort.signal})
            .then(res => {
            if(! (res.ok)){
                throw Error(res.statusText)
            }
            else{
                return res.json()
            }
            })
            .then(data => {
                setError(null)
                setData(data);
                setIsLoading(false);
            })
            .catch((err)=>{
                if (err.name !== "AbortError"){
                    setError(err.message)
                    setIsLoading(false)
                } 
            })

        return ()=> abort.abort()
    }, [url])

    return {data, isLoading, error}
} 

export default useFetch