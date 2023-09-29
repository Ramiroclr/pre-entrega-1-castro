import ItemCount from '../../ItemCount/ItemCount';
import './ItemListContainer.css';
import Swal from 'sweetalert2';
import Item from '../../Item/Item';
import ItemList from '../../ItemList/ItemList';
import productsFromFile from '../../../Data/data';
import { useEffect, useState } from 'react';
import {fetchProductsFirebase} from '../../../utils/functions';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

// Este componente (COMPONENTE LOGICO) es el que contiene toda la lógica del catálogo y envía los productos a los componentes de presentación.
const ItemListContainer = () => {

  //Creando estado para guardar la lista de productos.
  const [productListState, setProductListState] = useState()
  const [loading, setLoading] = useState(false)
  const {id} = useParams()
  console.log(id)
  // Función que se ejecuta cuando se carga la página.
  // El useEffect lo usamos para controlar cuando se piden los productos.
  // El array vacío del final indica que solo se va a llamar 1 vez cuando cargue el componente.
  useEffect(() => {
    asyncFunction()
  }, [id])
  const asyncFunction = async() => {
    setLoading (true)
    setTimeout(async () => {
    let productList = await fetchProductsFirebase(id)
    setProductListState(productList)
    setLoading (false)
  }, 1500)
  }
  
  return (
    <div className="body">      
      {/* Le pasamos por props la lista de productos a ItemList */}
      {
        loading ? (
          <ReactLoading type={'bubbles'} color={'white'} height={125} width={110} />
        )
        : 
        (
          productListState && <ItemList productsProps={productListState} />
          )
        }
    </div>
  );
}

export default ItemListContainer