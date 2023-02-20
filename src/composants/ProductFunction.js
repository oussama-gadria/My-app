import {  Card } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';
function ProductFunction(props) {
  
    const [product,setProduct]=useState(props.product)
    const IncrementLike=()=>{ 
        setProduct({...product,like:product.like+1 })    
  } 
    return ( <> 
        <Card style={{ width: '18rem' }}>
        <h1> like : {product.like} </h1><br></br>
        <h1> quantite : {product.quantity} </h1><br></br>
      <Card.Img variant="top" src={"../assets/images/" +product.img} alt="images"/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {/* {"../assets/" + product.img} */}
            {product.description}<br></br>
            {product.price} dt 
            <br></br>
            { <Alert variant={this.state.variant}>{this.state.message}</Alert> }
          </Card.Text>
         
        </Card.Body>
        <button  onClick={IncrementLike}> Like </button>
        {/* <button disabled={this.state.quantite==0} onClick={this.props.parentproduct(this.props.product)}>buy</button> */}
      </Card>;
</> );
}

export default ProductFunction;