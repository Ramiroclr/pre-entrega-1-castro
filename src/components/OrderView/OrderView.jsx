import React, {useContext} from 'react'
import CartContext from '../../context/CartContext'
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import OrderItem from './OrderItem';

const OrderView = () => {
    const {cart, removeFromCart, clearCart, getTotal} = useContext(CartContext)
    const handleAddOrder = () => {
        Swal.fire(
            'Operación exitosa!',
            `Tu orden de compra fue realizada exitosamente!`,
            'success')
    }
    return (
        <div>
            <h3>Revisa tu compra antes de confirmarla</h3>
            {cart?.map((element) => (
                <OrderItem product={element}/>
            ))}
            <Button variant="primary" onClick={() => handleAddOrder()}>Confirmar compra</Button>
        </div>
    )
}

export default OrderView
