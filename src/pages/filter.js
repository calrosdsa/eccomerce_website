import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Products from '../components/Products'
import { selectItems } from '../slices/basketSlice'
const types={
    productsShow:"product show"
}
function filter({filterProducts}) {
    const items=useSelector(selectItems)
    return (
        <div>
            <Header/>
            <div className="m-1">
               Category <select name="Category" id="">
               <option value="Select">Select</option>
                   <option value='  '>Electronics</option>
               <option value="Men Clothing">Men Clothing</option>
               <option value="Women Clothing">Women Clothing</option>
               <option value="Jwelrie">Jewlrie</option>
               </select>
            </div>
            <div>
                {filterProducts.map(item=>(
                    <div>{item.category}</div>
                )
                    
                    
                
                )}
            </div>
        </div>
    )
}

export default filter
export async function getServerSideProps(context){
    const filterProducts= await fetch("https://fakestoreapi.com/products").then((res)=>res.json());
    return{
      props:{
        filterProducts,
      }
    }
  }
