// import styles from './App.module.css';

import { useState } from 'react';
import HomePage from './homepage/Homepage.jsx';
import ShopPage from './shop-page/ShopPage.jsx';
import CartPage from './cart-page/CartPage.jsx';
import Banner from './banner/Banner.jsx';
import NavigationBar from './navigation-bar/NavigationBar.jsx';
import { useEffect } from 'react';
import {
	addCart,
	isDecreaseZero,
} from '../helper-functions/helper-functions.jsx';
import { Outlet } from 'react-router';

export default function App() {
	const [products, setProducts] = useState(null);
	const [cartItems, setCartItems] = useState(null);
	// const [page, setPage] = useState('HomePage');

	useEffect(() => {
		fetch(
			'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner&product_category=pencil',
		)
			.then((response) => response.json())
			.then((response) =>
				response.filter((item, index) => index != 0 && index != 1),
			)
			.then((response) =>
				setProducts(
					response.map((item) => ({
						ref: item.id,
						url: item.image_link,
						name: item.name,
						brand: item.brand,
						description: item.description,
						price: item.price,
						quantity: 0,
					})),
				),
			);
	}, []);

	// function handlePage(e) {
	// 	const name = e.target.dataset.testid;

	// 	if (name == 'productsBtn') {
	// 		setPage('ShopPage');
	// 	} else if (name == 'cartBtn') {
	// 		setPage('CartPage');
	// 	} else {
	// 		setPage('HomePage');
	// 	}
	// }

	function handleItemQty(e) {
		const ref = e.target.parentElement.dataset.ref;
		const quantity = e.target.textContent;

		if (quantity === '+') {
			setProducts(
				products.map((item) =>
					item.ref == ref
						? {
								...item,
								quantity: item.quantity + 1,
							}
						: { ...item },
				),
			);
		} else {
			setProducts(
				products.map((item) => {
					return item.ref == ref
						? {
								...item,
								quantity: isDecreaseZero(item.quantity),
							}
						: { ...item };
				}),
			);
		}
	}

	function handleChange(e) {
		const ref = e.target.parentElement.dataset.ref;
		const quantity = e.target.value;

		setProducts(
			products.map((item) =>
				item.ref == ref ? { ...item, quantity: quantity } : { ...item },
			),
		);
	}

	function handleAddCart(e) {
		const ref = e.target.parentElement.dataset.ref;
		const product = products.filter((item) => item.ref == ref)[0];

		setCartItems(addCart(cartItems, product));

		setProducts(
			products.map((item) =>
				item.ref == ref ? { ...item, quantity: 0 } : { ...item },
			),
		);
	}
	return (
		<>
			<header>
				<Banner />
				<NavigationBar />
			</header>
			{/* should render HomePage */}
			<Outlet
				context={[products, cartItems, handleChange, handleItemQty, handleAddCart]}
			/>
		</>
	);
}

{
	/* {page === 'HomePage' ? (
				<HomePage
					cartItems={cartItems}
					handleChange={handleChange}
					handleItemQty={handleItemQty}
				/>
			) : page === 'ShopPage' ? (
				<ShopPage
					products={products}
					handleChange={handleChange}
					handleItemQty={handleItemQty}
					handleAddCart={handleAddCart}
				/>
			) : (
				<CartPage cartItems={cartItems} handleItemQty={handleItemQty} />
			)} */
}
