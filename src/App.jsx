import './App.css';
import ItemList from './components/ItemList/ItemList';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import CartView from './components/CartView/CartView';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path='/' element={<ItemListContainer />} />
              <Route exact path='/categories/:id' element={<ItemListContainer />} />
              <Route exact path='/item/:id' element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<CartView />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </header>
    </div>
  );
}

export default App;
