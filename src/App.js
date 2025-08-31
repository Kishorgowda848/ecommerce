import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
function App() {


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <CartContext.Provider value={{ descQuantity, increaseQuantity, cart }}> */}
        <Switch>
          <Route path="/cart" exact="true" component={CartPage} />
          <Route path="/" exact="true" component={Products} match="true" />
          <Route component={NotFoundPage} />
        </Switch>
        {/* <Cart cart={cart} /> */}
        {/* <Product descQuantity={descQuantity} increaseQuantity={increaseQuantity} cart={cart} /> */}
      {/* </CartContext.Provider> */}
    </div>
  );
}

export default App;
