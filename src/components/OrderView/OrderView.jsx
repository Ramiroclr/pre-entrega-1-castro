import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import OrderItem from './OrderItem';
import {
    collection,
    getFirestore,
    addDoc
} from "firebase/firestore/lite"
import './OrderView.css';
import { NavLink } from 'react-router-dom';

const OrderView = () => {
    const { cart, removeFromCart, clearCart, getTotal } = useContext(CartContext)

    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')

    const date = new Date();
    let orderObject = {
        buyer: {
            name: 'Juan Perez',
            email: 'juan.perez@ejemplo.com',
            phone: 5365456,
            address: 'Rivadavia 123',
        },
        items: cart.map((element) => ({
            id: element.item.id,
            quantity: element.quantity,
            price: element.item.price,
            title: element.item.title,
        })),
        date: date,
        total: getTotal()
    }

    const handleAddOrder = () => {
        addDoc(ordersCollection, orderObject).then((result) => {
            console.log(result)
            Swal.fire(
                'Operación exitosa!',
                `Tu orden de compra fue realizada exitosamente! - 
                El ID de tu orden es: ${result.id}`,
                'success')
        })

    }
    return (
        <div>
            <h3>Revisa tu compra antes de confirmarla</h3>
            <div className='order-list-container'>
                {cart?.map((element) => (
                    <>
                        <OrderItem product={element} />
                        <hr></hr>
                    </>
                ))}
                <h4 className='total-compra'>Total de la compra: ${getTotal()}</h4>
            </div>
            <NavLink>
                <Button variant="primary" onClick={() => handleAddOrder()}>Confirmar compra</Button>
            </NavLink>
            <NavLink to='/cart'>
                <Button variant="primary">Volver al carrito</Button>
            </NavLink>
            <NavLink to='/'>
                <Button variant="primary">Seguir comprando</Button>
            </NavLink>
        </div>
    )
}

export default OrderView
