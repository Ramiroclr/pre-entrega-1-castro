import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//Item aporta el HTML de cada producto del catálogo.

const Item = ({itemProduct}) => {
    // Recibimos un único producto por Props desde ItemList (itemProduct).
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={200} src={itemProduct?.pictureUrl} />
                <Card.Body>
                    <Card.Title>{itemProduct?.title}</Card.Title>
                    <Card.Text>
                    Precio: ${itemProduct?.price}
                    </Card.Text>
                    <Button variant="primary">Ver Detalle</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
