import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({product}) => {
    const {addToCart} = useContext(CartContext)

    //
    const handleAddToCart = (quantity) => {
        addToCart(product, quantity)
        Swal.fire('Operación exitosa!', `Agregaste ${quantity} producto/s al carrito`, 'success')
    }
    return (
        <div>
            <Card className="text-center">
                <Card.Header>{product?.title}</Card.Header>
                <Card.Body>
                    <Card.Img height= {400} src={product?.image}></Card.Img>
                    <Card.Text>
                        {product?.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Precio: ${product?.price}</Card.Footer>
                <ItemCount stock={10} handleAddToCart={handleAddToCart} />
            </Card>
        </div>
    )
}

export default ItemDetail
