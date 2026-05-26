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
	changeBtnQty,
} from '../helper-functions/helper-functions.jsx';
import { Outlet } from 'react-router';

export default function App() {
	const [products, setProducts] = useState(null);
	const [cartItems, setCartItems] = useState(null);

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
						quantity: 1,
					})),
				),
			);
	}, []);

	function handleItemQty(e) {
		let type = e.target.parentElement.dataset.type;
		const ref = e.target.parentElement.dataset.ref;
		const quantity = e.target.textContent;

		type === 'shop'
			? changeBtnQty(products, quantity, ref, setProducts)
			: changeBtnQty(products, quantity, ref, setCartItems);
	}

	function handleChange(e) {
		let ref = e.target.parentElement.dataset.ref;
		const type = e.target.parentElement.dataset.type;
		const quantity = e.target.value;

		if (type === 'shop') {
			return setProducts(
				products.map((item) =>
					item.ref == ref ? { ...item, quantity: quantity } : { ...item },
				),
			);
		} else {
			ref = e.target.parentElement.parentElement.dataset.ref;
			setCartItems(
				cartItems.map((item) =>
					item.ref == ref ? { ...item, quantity: quantity } : { ...item },
				),
			);
		}
	}

	function handleAddCart(e) {
		const ref = e.target.parentElement.dataset.ref;
		const product = products.filter((item) => item.ref == ref)[0];

		setCartItems(addCart(cartItems, product));

		setProducts(
			products.map((item) =>
				item.ref == ref ? { ...item, quantity: 1 } : { ...item },
			),
		);
	}
	return (
		<>
			<header>
				<Banner />
				<NavigationBar cartItems={cartItems} />
			</header>
			<Outlet
				context={[products, cartItems, handleChange, handleItemQty, handleAddCart]}
			/>
		</>
	);
}
