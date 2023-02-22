import { Card } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';

function ProductFunction(props) {
  const [product, setProduct] = useState(props.product);
  const [variant, setVariant] = useState(null);
  const [message, setMessage] = useState("");

  const IncrementLike = () => {
    setProduct({ ...product, like: product.like + 1 });
  };
  const productClass = product.like > 5 ? "product bestProduct" : "product";
  const handleBuy = () => {
    if (product.quantity > 0) {
      setProduct({ ...product, quantity: product.quantity - 1 });
      setVariant("success");
      setMessage("You Bought an item");
      setTimeout(() => {
        setVariant(null);
        setMessage("");
      }, 2000);
    }
  };

  return (
    <>
      <Card className={productClass} style={{ width: '18rem' }}>
        <h1> like : {product.like} </h1><br />
        <h1> quantite : {product.quantity} </h1><br />
        <Card.Img variant="top" src={"../assets/images/" + product.img} alt="images" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {/* {"../assets/" + product.img} */}
            {product.description}<br />
            {product.price} dt
            <br />
            {variant && <Alert variant={variant}>{message}</Alert>}
          </Card.Text>
        </Card.Body>
        <button onClick={IncrementLike}> Like </button>
        <button disabled={product.quantity === 0} onClick={handleBuy}>Buy</button>
      </Card>
    </>
  );
}

export default ProductFunction;