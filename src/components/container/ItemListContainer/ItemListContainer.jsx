import ItemCount from '../../ItemCount/ItemCount';
import './ItemListContainer.css';
import Swal from 'sweetalert2';
import Item from '../../Item/Item';
import ItemList from '../../ItemList/ItemList';
import productsFromFile from '../../../Data/data';
import { useState } from 'react';

// Este componente (COMPONENTE LOGICO) es el que contiene toda la lógica del catálogo y envía los productos a los componentes de presentación.
const ItemListContainer = ({props}) => {

  //Creando estado para guardar la lista de productos.
  const [productListState, setProductListState] = useState(productsFromFile)


  const handleAddToCart = () =>{
    Swal.fire('Operación exitosa!', 'Agregaste un producto al carrito', 'success')
  }
  return (
    <div className="body">
      {/* <ItemCount stock={10} handleAddToCart={handleAddToCart} /> */}
      <h2>{props}</h2>
      
      {/* Le pasamos por props la lista de productos a ItemList */}
      <ItemList productsProps={productListState}/>
      
    </div>
  );
}

export default ItemListContainer