import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../store/cardSlice';

const Cart = () => {
 const products= useSelector(state=>state.card)
  const dispatch= useDispatch()

  console.log(products);
 const removeItems=(id)=>{
  dispatch(removeItem(id))
 }   
  return (
    <div>
      
      
    {
       products.map((product)=>(
        <Card style={{width:"70%"}} className="my-4 m-auto  ">
        <Card.Img variant="top" src={product.image} style={{height:" 200px", width:"200px"}} className="m-auto" />
        <Card.Body className='m-auto'>
          <Card.Title  >{product.title}</Card.Title>
          {/* <Card.Text>
            {item.description}
          </Card.Text> */}
          <Card.Title>INR {product.price}</Card.Title>
          <Button variant="danger" onClick={()=>removeItems(product.id)}>Remove Item</Button>
        </Card.Body>
      </Card>
      ))
    }
   
    
    </div>
  )
}

export default Cart