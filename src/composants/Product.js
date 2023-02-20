import React, { Component } from 'react';
import {  Card } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
class Product extends Component {
    state = {
        like:0, 
        quantite:this.props.product.quantity,        
        message:"",
        variant:null
    }
    IncrementLike=()=>{ 
        this.setState({ 
            like:this.state.like + 1
        })
    } 
    
    

    render() { 
      return  <Card style={{ width: '18rem' }}>
        <h1> like : {this.state.like} </h1><br></br>
        <h1> quantite : {this.state.quantite} </h1><br></br>
        {this.quantite}
        <Card.Img variant="top" src={"../assets/images/" +this.props.product.img} alt="images"/>
        <Card.Body>
          <Card.Title>{this.props.product.name}</Card.Title>
          <Card.Text>
            {/* {"../assets/" + this.props.product.img} */}
            {this.props.product.description}<br></br>
            {this.props.product.price} dt 
            <br></br>
            <Alert variant={this.state.variant}>{this.state.message}</Alert>
          </Card.Text>
         
        </Card.Body>
        <button  onClick={this.IncrementLike}> Like </button>
        <button disabled={this.state.quantite==0} onClick={this.props.parentproduct(this.props.product)}>buy</button>
      </Card>;
    }
  }
   
  export default Product;