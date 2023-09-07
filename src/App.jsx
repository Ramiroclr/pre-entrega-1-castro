import './App.css';
import ItemList from './components/ItemList/ItemList';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>} />
            <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
