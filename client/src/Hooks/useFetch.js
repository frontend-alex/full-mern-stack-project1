import React, { useEffect, useState } from 'react';

const useFetch = (url, stateCondition) => {

    const [ data, setData ] = useState(stateCondition);
    const [ error, setError] = useState('')

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => setError(err)) 
    }, [])

  return [
    data,
    error
  ]
}

export default useFetch