// import styles from './App.module.css';

import { useState } from 'react';
import HomePage from './homepage/Homepage.jsx';
import ShopPage from './shop-page/ShopPage.jsx';
import CartPage from './cart-page/CartPage.jsx';

export default function App() {
	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState(items);
	const [page, setPage] = useState('HomePage');

	function handlePage(e) {
		const name = e.target.textContent;

		if (name == 'PRODUCT') {
			setPage('ShopPage');
		} else if (name == 'CART') {
			setPage('CartPage');
		} else {
			setPage('HomePage');
		}
	}

	function handleItemQty(e) {
		const ref = e.target.dataset.ref;
		const quantity = e.target.textContent;

		if (quantity === '+') {
			setProducts(
				cartItems.map((item) =>
					item.ref === ref
						? {
								...item,
								quantity: Number(item.quantity + 1),
							}
						: { ...item },
				),
			);
		} else {
			if (quantity != 0) {
				setProducts(
					cartItems.map((item) =>
						item.ref === ref
							? {
									...item,
									quantity: Number(item.quantity - 1),
								}
							: { ...item },
					),
				);
			}
		}
	}

	function handleChange(e) {
		const ref = e.target.dataset.ref;
		const quantity = e.target.value;

		setProducts(
			products.map((item) =>
				item.ref === ref ? { ...item, quantity: quantity } : { ...item },
			),
		);
	}

	function handleAddCart(e) {
		const ref = e.target.dataset.ref;
		const product = items.filter((item) => item.ref === ref)[0];

		setCartItems(
			cartItems.map((item) =>
				item.ref === ref
					? { ...item, quantity: Number(item.quantity + product.quantity) }
					: { ...item },
			),
		);

		setProducts(
			products.map((item) =>
				item.ref === ref ? { ...item, quantity: 0 } : { ...item },
			),
		);
	}

	return (
		<div>
			{page === 'HomePage' ? (
				<HomePage
					cartItems={cartItems}
					handlePage={handlePage}
					handleChange={handleChange}
					handleItemQty={handleItemQty}
				/>
			) : page === 'ShopPage' ? (
				<ShopPage
					cartItems={cartItems}
					handlePage={handlePage}
					handleChange={handleChange}
					handleItemQty={handleItemQty}
					handleAddCart={handleAddCart}
				/>
			) : (
				<CartPage
					cartItems={cartItems}
					handlePage={handlePage}
					handleChange={handleChange}
					handleItemQty={handleItemQty}
				/>
			)}
		</div>
	);
}

const items = [
	{
		id: '1234',
		name: 'Brush',
		quantity: 3,
		description: 'a beautiful brush 2mm',
		price: 12.0,
	},
	{
		id: '12345',
		name: 'pencil',
		quantity: 2,
		description: 'lip liner 3mm pencil',
		price: 20.0,
	},
];
