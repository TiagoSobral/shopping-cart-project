// import styles from './App.module.css';

import { useState } from 'react';
import HomePage from './homepage/homepage';
import ShopPage from './shop-page/ShopPage.jsx';
import CartPage from './cart-page/CartPage.jsx';

export default function App() {
	const [cartItems, setCartItems] = useState([]);
	const [page, setPage] = useState('HomePage');

	return (
		<div>
			{page === 'HomePage' ? (
				<HomePage setPage={setPage} cartItems={cartItems} />
			) : page === 'ShopPage' ? (
				<ShopPage
					setPage={setPage}
					cartItems={cartItems}
					setCartItems={setCartItems}
				/>
			) : (
				<CartPage
					setPage={setPage}
					cartItems={cartItems}
					setCartItems={setCartItems}
				/>
			)}
		</div>
	);
}
