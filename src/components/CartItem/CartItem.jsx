import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CartItem = ({product, remove}) => {
    return (
        <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>{product.item.title}</Card.Title>
                <Card.Text>precio: ${product.item.price}</Card.Text>
                <Card.Text>cantidad:{product.quantity}</Card.Text>
                <Button variant="primary" onClick={() => remove(product.item.id)}>Quitar del carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default CartItem
