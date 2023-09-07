import ItemCount from '../../ItemCount/ItemCount';
import './ItemListContainer.css';
import Swal from 'sweetalert2';
import Item from '../../Item/Item';
import ItemList from '../../ItemList/ItemList';
import productsFromFile from '../../../Data/data';
import { useEffect, useState } from 'react';
import {callPromise} from '../../../utils/functions';

// Este componente (COMPONENTE LOGICO) es el que contiene toda la lógica del catálogo y envía los productos a los componentes de presentación.
const ItemListContainer = () => {

  //Creando estado para guardar la lista de productos.
  const [productListState, setProductListState] = useState()

  // Función que se ejecuta cuando se carga la página.
  // El useEffect lo usamos para controlar cuando se piden los productos.
  // El array vacío del final indica que solo se va a llamar 1 vez cuando cargue el componente.
  useEffect(() => {
    callPromise(setProductListState)
  }, [])

  const handleAddToCart = () => {
    Swal.fire('Operación exitosa!', 'Agregaste un producto al carrito', 'success')
  }
  return (
    <div className="body">
      {/* <ItemCount stock={10} handleAddToCart={handleAddToCart} /> */}
      
      {/* Le pasamos por props la lista de productos a ItemList */}
      {productListState && <ItemList productsProps={productListState} />}

    </div>
  );
}

export default ItemListContainer