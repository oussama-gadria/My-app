import Product from "./Product";
import React, { Component } from 'react';
import products from '../products.json'
class Products extends Component {

    state = {  }
    render() { 
        return (
        <>
        { 
            products.map((p)=>{ 
                return(<Product product={p}></Product>)
        }
        )
    }
        </>)
       
    }

}
 
export default Products;