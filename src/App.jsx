import './App.css';
import NavBar from './container/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <NavBar />
      <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
