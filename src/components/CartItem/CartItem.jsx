import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CartItem.css"


const CartItem = ({ product, remove }) => {
    return (
        <Card className="text-center cart-item">
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Img className='card-img1' variant="top" src={product.item.image} />
                <Card.Title>{product.item.title}</Card.Title>
                <Card.Text>precio: ${product.item.price}</Card.Text>
                <Card.Text>cantidad:{product.quantity}</Card.Text>
                <Button variant="primary" onClick={() => remove(product.item.id)}>X</Button>
            </Card.Body>
        </Card>
    )
}

export default CartItem
