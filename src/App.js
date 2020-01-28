import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import { ProductContext, CartContext } from './contexts';
import { useLocalStorage } from './hooks';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('cart', []);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = arrIndex => {
		let tempCart = [...cart];
		tempCart.splice(arrIndex, 1);
		setCart(tempCart);
	}

	return (
		<div className="App">
			<CartContext.Provider value={{ cart, removeItem }}>
				<Navigation />

				{/* Routes */}
				<ProductContext.Provider value={{ products, addItem }}>
					<Route exact path="/" component={Products} />
				</ProductContext.Provider>

				<Route path="/cart" component={ShoppingCart} />
			</CartContext.Provider>
		</div>
	);
}

export default App;
