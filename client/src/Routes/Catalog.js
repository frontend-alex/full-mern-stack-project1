import React, { useState, useEffect} from "react";

import { BsPlay } from "react-icons/bs";

import CatalogCard from "../Components/CatalogCard/CatalogCard";
import ErrorToast from "../Components/ToastMessages/ErrorToast";
import OkToast from '../Components/ToastMessages/OkayToast'

import useFetch from "../Hooks/useFetch";

const Catalog = ({ coutner, setCounter, cart, setCart }) => {
  const [data, error] = useFetch("https://fakestoreapi.com/products");

  const [ errorToast, setErrorToast ] = useState(false);
  const [ added, setAdded ] = useState(false)


  const getItem = (item) => {  
    setAdded(false)  

    let added = false

    cart?.forEach(product => {
      if(item.id == product.id){
        added = true
      }
    })

    if(added){
      setErrorToast(true)

      setTimeout(() => {
        setErrorToast(false)
      }, 3000)

      return ;
    }
    setAdded(true)
    setCart([...cart, item])
    setCounter(cart.length)
  };

  return (
    <div className="catalog-container">
      {added &&  <OkToast text='Item added :D'/>}
      {errorToast && <ErrorToast text='Item already in your cart!'/>}



      <div className="catalog-header">
        <h1>
          Premuim Shoes from From Manifacturer
          <span className="purple">B. Brand</span> at reasonable prices
        </h1>
        <div className="box-2">
          <div className="header-circle">
            <BsPlay className="icon" />
            <p>Watch a company presentation</p>
          </div>
        </div>
      </div>

      <div className="catalog-sorting-conainter">
        <div className="box-1">
          <input required placeholder="200$-500$" />
          <label>Price:</label>
        </div>
        <div className="box-2">
          <input required placeholder="Chairs" />
          <label>Category:</label>
        </div>
        <div className="box-3">
          <input required placeholder="Purple" />
          <label>Color:</label>
        </div>
      </div>

      <div className="catalog-post-container">
        {data?.map((data) => (
          <CatalogCard
            key={data.id}
            getItem={getItem}
            data={data}

            coutner={coutner}
            setCounter={setCounter}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
