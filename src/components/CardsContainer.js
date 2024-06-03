import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cardSlice";

const CardsContainer = () => {
  const [cartData, setCardData] = useState([]);
  const dispatch= useDispatch();

  useEffect(() => {
    apiData();
  }, []);

  const apiData = async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    console.log(data);
    setCardData(data);
  };

  const handleAdd=(item)=>{
      dispatch(addToCart(item))
  }

  return (
    <div className="d-flex flex-wrap ">
      {cartData.map((item) => (
        
          <Card style={{ width: "18rem",  }} className="me-3 mb-3 m-auto ">
            <Card.Img variant="top" src={item.image} style={{height:" 200px", width:"200px"}} className="m-auto" />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              {/* <Card.Text>
                {item.description}
              </Card.Text> */}
              <Card.Title>INR {item.price}</Card.Title>
              <Button variant="primary" onClick={()=>handleAdd(item)} >Add to Cart</Button>
            </Card.Body>
          </Card>
        
      ))}
    </div>
  );
};

export default CardsContainer;
