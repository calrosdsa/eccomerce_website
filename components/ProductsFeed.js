import React from 'react'
import Products from './Products'
function ProductsFeed({products}) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 sm:mx-5 lg:mx-10 sm:-mt-20 ">
         {products.map(({title,price,image,description,id,category})=>(
             <Products
             id={id}
             title={title}
             key={id}
             image={image}
             price={price}
             description={description}
             category={category}
             />
         ))}
        </div>
    )
}

export default ProductsFeed
