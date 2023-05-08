import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../Hooks/useFetch';

const CatalogProduct = () => {

    const { productId } = useParams();

    const [ data, error] = useFetch(`https://fakestoreapi.com/products/${productId}`)
    
  return (
    <div>CatalogProduct:  {productId}</div>
  )
}

export default CatalogProduct