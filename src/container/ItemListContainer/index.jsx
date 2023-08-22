import ItemCount from '../../components/ItemCount';
import './style.css'

const ItemListContainer = ({props}) => {
  return (
    <div className="body">
      <ItemCount />
      <h2>{props}</h2>
    </div>
  );
}

export default ItemListContainer