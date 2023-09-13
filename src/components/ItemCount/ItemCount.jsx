import React, { useState } from 'react'
import './ItemCount.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemCount = ({stock = 5, handleAddToCart}) => {
    //Creamos un estado extrayendo una variable que represente al estado y una función para modificar ese estado
    //El estado no se puede cambiar sin usaar esta función en pareja.
    //Cuando usamos el useState le podemos asignar un valor inicial al estado pasandole el valor como parámetro.
    const [counter, setCounter] = useState(1);

    const add = () => {
        if(counter < stock){
            setCounter (counter + 1);
        }
    }

    const substract = () => {
        if(counter > 1){
            setCounter (counter - 1);
        }
    }
    
    return (
        <div className='counter-container'>
            Hola soy el contador
            <ButtonGroup aria-label="Basic example">
                <Button onClick={substract} variant="secondary">-</Button>
                <Button variant="secondary">{counter}</Button>
                <Button onClick={add} variant="secondary">+</Button>
            </ButtonGroup>
            <Button onClick={() => handleAddToCart(counter)}>Agregar al carrito</Button>            
        </div>
    )
}

export default ItemCount
