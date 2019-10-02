import React, { useContext } from 'react';

import { ProductContext } from '../contexts/';

// Components
import Product from './Product';

const Products = () => {
	const { products , addItem } = useContext(ProductContext);
	console.log('products', products);
	// if(true) return null;
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
