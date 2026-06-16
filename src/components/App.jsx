import { useEffect, useState } from 'react';
import HomePage from './homepage/Homepage.jsx';
import ShopPage from './shop-page/ShopPage.jsx';
import CartPage from './cart-page/CartPage.jsx';
import Banner from './banner/Banner.jsx';
import NavigationBar from './navigation-bar/NavigationBar.jsx';
import {
	addCart,
	changeBtnQty,
	getInfo,
} from '../helper-functions/helper-functions.jsx';
import { Outlet } from 'react-router';

export default function App() {
	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		getInfo(setProducts);
	}, []);

	function handleItemQty(e) {
		let type = e.target.parentElement.dataset.type;
		let ref = e.target.parentElement.dataset.ref;
		const quantity = e.target.textContent;

		if (ref == undefined) {
			ref = e.target.parentElement.parentElement.dataset.ref;
			type = e.target.parentElement.parentElement.dataset.type;
		}

		type === 'shop'
			? changeBtnQty(products, quantity, ref, setProducts)
			: changeBtnQty(cartItems, quantity, ref, setCartItems);
	}

	function handleChange(e) {
		let ref = e.target.parentElement.dataset.ref;
		let type = e.target.parentElement.dataset.type;
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
