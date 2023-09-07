import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({product}) => {
    return (
        <div>
            <Card className="text-center">
                <Card.Header>{product?.title}</Card.Header>
                <Card.Body>

                    <Card.Img height= {300} src={product?.pictureUrl}></Card.Img>
                    <Card.Text>
                        {product?.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    )
}

export default ItemDetail
