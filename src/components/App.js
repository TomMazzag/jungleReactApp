import logo from '../logo.svg';
import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import { handleSubmit } from './clickScript';

function App() {
  return (
    <div className="App">
      <Banner />
      <ShoppingList />
      <form onSubmit={handleSubmit}>
        <input type='text' name='my_input' defaultValue='Type your text here' />
        <button type='submit'>Enter</button>
      </form>
    </div>
  );
}

export default App;
