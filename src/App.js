import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import { ProductContext, CartContext } from './contexts';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = item => {
		console.log('remove item', item);
		let tempCart = cart.filter( cartItem => {
			return cartItem.id !== item.id
		});
		setCart(tempCart);
	}

	return (
		<div className="App">
			<CartContext.Provider value={{ cart: cart, removeItem: removeItem }}>
				<Navigation />

				{/* Routes */}
				<ProductContext.Provider value={{ products: products, addItem: addItem }}>
					<Route exact path="/" component={Products} />
				</ProductContext.Provider>

				<Route path="/cart" component={ShoppingCart} />
			</CartContext.Provider>
		</div>
	);
}

export default App;
