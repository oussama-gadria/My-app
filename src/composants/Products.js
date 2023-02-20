import Product from "./Product";
import React, { Component } from 'react';
import products from '../products.json'
class Products extends Component {

    state = {  
        message:"",
        variant:null
    }
    decrementquantite=(product)=>{ 
       
         if (product.quantite>0){ 
           product.quantity -- ; 
           this.setState({ 
             message:"You Bought an item",
             variant:"success"
         })
         setTimeout(()=>{ 
           this.setState({ 
             message:"",
             variant:null
         })
         },2000)
         }
        
      }
    render() { 
        return (
        <>
        { 
            products.map((p)=>{         
                return(<Product product={p}  parentproduct={this.decrementquantite}></Product>)
        }
        )
    }    
   
        </>)
       
    }

}
 
export default Products;