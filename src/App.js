import { useState } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import CartContext from './Context/CartContext';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
function App() {

  const [cart, setcart] = useState({});

  const increaseQuantity = (product) => {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    setcart(newCart)
  }

  const descQuantity = (product) => {
    const newCart = { ...cart };
    if (newCart[product.id]) {
      newCart[product.id].quantity -= 1;
    }
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setcart(newCart);
  }

  return (
    <div className="App">
      <CartContext.Provider value={{ descQuantity, increaseQuantity, cart }}>
        <Switch>
          <Route path="/cart" exact="true" component={CartPage} />
          <Route path="/" exact="true" component={Products} match="true" />
          <Route component={NotFoundPage} />
        </Switch>
      </CartContext.Provider>
    </div>
  );
}

export default App;
