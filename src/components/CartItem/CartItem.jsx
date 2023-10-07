import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CartItem.css"


const CartItem = ({ product, remove }) => {
    return (
        <Card className="text-center cart-item">
            <Card.Body>
                <Card.Img className='card-img1' variant="top" src={product.item.image} />
                <div className='cart-item-text-container'>
                    <Card.Title>{product.item.title}</Card.Title>
                    <Card.Text className='cart-item-price'>Precio: ${product.item.price}</Card.Text>
                    <Card.Text className='cart-item-quantity'>Cantidad: {product.quantity}</Card.Text>
                </div>
                <Button variant="primary" onClick={() => remove(product.item.id)}>Eliminar</Button>
            </Card.Body>
        </Card>
    )
}

export default CartItem
