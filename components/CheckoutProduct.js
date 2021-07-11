import React from 'react'
import { useDispatch } from 'react-redux'
import {addToBasket,removeFromBasket}from '../slices/basketSlice'

function CheckoutProduct({
    price,title,image,description,category,id
}) {
    const dispatch=useDispatch()
    const addItemToBasket=()=>{
    const product={ price,title,image,description,category,id}
    dispatch(addToBasket(product));
}
    const removeItemFromBasket=()=>{

        dispatch(removeFromBasket({id}))
    }
    return (
        <div className="grid grid-cols-10 bg-gray-200 sm:m-5 rounded-lg "> 
        
        <div className="col-start-1  col-span-3  sm:col-span-3 sm:ml-3 md:ml-4 lg:ml-16 ">
            <p className="text-[7px] sm:text-[10px] font-bold md:text-xs   italic">{category}</p>
            <img src={image} className="h-[90px] sm:h-[110px]  md:h-[120px] lg:h-[140px]   min-w-[40px]  object-contain  rounded-lg" alt="" />
        </div>
        <div className="col-start-5 col-span-7 sm:col-span-7    ">
            <div className="flex">
          <h1 className="text-xs md:text-base sm:text-sm sm:mr-2 font-bold line-clamp-1 ">{title }</h1>
          <p className='text-xs font-bold text-gray-600 sm:text-sm md:text-base md:ml-3 '>{price}$</p>
            </div>
          <p className="text-[7px] line-clamp-3  sm:text-[11px] font-medium">{description}</p>
          <div className="text-sm space-x-1  mt-2 line-clamp-1 ">

         <button onClick={removeItemFromBasket} className="bg-gray-400 rounded-md text-[10px]  font-semibold sm:text-base">Remove Product</button>
         <button onClick={addItemToBasket} className="bg-gray-400 rounded-md text-[10px] font-semibold sm:text-base ">Add Product </button>
          </div>
        </div>
        </div>
    )
}

export default CheckoutProduct
