import './App.css';
import NavBar from './container/NavBar';
import ItemsListContainer from './container/ItemsListContainer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <NavBar />
      <ItemsListContainer />
      </header>
    </div>
  );
}

export default App;
