import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import './Item.css'

//Item aporta el HTML de cada producto del catálogo.

const Item = ({itemProduct}) => {
    // Recibimos un único producto por Props desde ItemList (itemProduct).
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img className= 'card-img' variant="top" src={itemProduct?.image} />
                <Card.Body>
                    <Card.Title>{itemProduct?.title}</Card.Title>
                    <Card.Text>
                    Precio: ${itemProduct?.price}
                    </Card.Text>
                <Link to ={`/item/${itemProduct?.id}`}>
                    <Button variant="primary">Ver Detalle</Button>
                </Link>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
