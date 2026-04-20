// import styles from './App.module.css';

import { useState } from 'react';
import HomePage from './homepage/Homepage.jsx';
import ShopPage from './shop-page/ShopPage.jsx';
import CartPage from './cart-page/CartPage.jsx';
import Banner from './banner/Banner.jsx';
import NavigationBar from './navigation-bar/NavigationBar.jsx';

export default function App() {
	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState(items);
	const [page, setPage] = useState('HomePage');

	function handlePage(e) {
		const name = e.target.dataset.testid;

		console.log(name);

		if (name == 'productsBtn') {
			setPage('ShopPage');
		} else if (name == 'cartBtn') {
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
		<>
			<header>
				<Banner />
				<NavigationBar cartItems={cartItems} handlePage={handlePage} />
			</header>
			{page === 'HomePage' ? (
				<HomePage
					cartItems={cartItems}
					handleChange={handleChange}
					handleItemQty={handleItemQty}
				/>
			) : page === 'ShopPage' ? (
				<ShopPage
					cartItems={cartItems}
					handleChange={handleChange}
					handleItemQty={handleItemQty}
					handleAddCart={handleAddCart}
				/>
			) : (
				<CartPage cartItems={cartItems} handleItemQty={handleItemQty} />
			)}
		</>
	);
}

const items = [
	{
		ref: '1234',
		url: 'bla',
		name: 'Brush',
		quantity: 3,
		description: 'a beautiful brush 2mm',
		price: 12.0,
	},
	{
		ref: '12345',
		url: 'bua',
		name: 'pencil',
		quantity: 2,
		description: 'lip liner 3mm pencil',
		price: 20.0,
	},
];
