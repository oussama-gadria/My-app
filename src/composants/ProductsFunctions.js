import products from '../products.json'
import ProductFunction from './ProductFunction';
import React from 'react';
function ProductsFunction() {

    return ( <>{
     products.map((p)=>{
        return( <ProductFunction product={p}></ProductFunction>)
     })
 } </> );
}

export default ProductsFunction;