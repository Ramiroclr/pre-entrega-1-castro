import './App.css';
import ItemList from './components/ItemList/ItemList';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        <ItemListContainer />
        <ItemList />
      </header>
    </div>
  );
}

export default App;
