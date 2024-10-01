import { useState } from "react"

export const useFetching = (callback) => {
  const [isLoading, setIsLoadwing] = useState(false);
  const [error, setError] =useState('');

  const fetching = async(...args) => {
    try {
       setIsLoadwing(true)
       await callback(...args)
    } catch(e) { 
       setError(e.message);
    } finally {
       setIsLoadwing(false) 
    }
  }

  return [fetching, isLoading, error]
}