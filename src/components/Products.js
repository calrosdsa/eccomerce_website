import React from 'react'
import Image from "next/image"
import {useDispatch} from 'react-redux'
import {addToBasket} from "../slices/basketSlice"
function Products({price,title,image,description,category}) {
    const dispatch=useDispatch();

   const addItemToBasket=()=>{
   const product={price,title,image,description,category}
   dispatch(addToBasket(product))
   }

    return (
        <div className="bg-transparent">
            <div className="bg-gray-200 m-[5px] rounded-xl">

            <div className='m-1'>  
                <div className="flex justify-between">

                <p className="text-[9px] font-bold text-gray-500">{category}</p>
                <p className=" bg-red-500 text-gray-100 h-4 font-bold  text-[10px] rounded-md">{price}$</p>
                </div>
               <img src={image} className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] object-contain" alt="" />
                
            </div>

            <h1 className="text-[11px] font-bold line-clamp-1">{title}</h1>
            <p className='text-[10px] line-clamp-2'>{description}</p>
            <button onClick={addItemToBasket} className="bg-gradient-to-t from-gray-200 to-gray-600 min-w-full h-5 my-1 text-xs text-gray-600 font-bold rounded-xl">Add the Cart</button>
            </div>
        </div>
    )
}

export default Products
