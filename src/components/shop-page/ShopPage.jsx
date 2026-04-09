import styles from './ShopPage.module.css';
import NavigationBar from '../navigation-bar/NavigationBar.jsx';
import Banner from '../banner/Banner.jsx';
import { useState } from 'react';

export default function ShopPage() {
	const [cartQty, setCartQty] = useState(0);

	return (
		<>
			<header>
				<Banner />
				<NavigationBar itemsQty={cartQty} />
			</header>
			<main>
				<Cards setCartQty={setCartQty} />
			</main>
		</>
	);
}

function Cards({ setCartQty }) {
	return (
		<div className={styles.cards}>
			<Card setCartQty={setCartQty} />
			<Card setCartQty={setCartQty} />
			<Card setCartQty={setCartQty} />
		</div>
	);
}

function Card({ setCartQty }) {
	const [itemQuantity, setItemQuantity] = useState(0);

	function handleClick(e) {
		const btnName = e.target.textContent;

		btnName === 'Decrement'
			? setItemQuantity((n) => (n === 0 ? 0 : n - 1))
			: setItemQuantity((n) => n + 1);
	}

	function handleChange(e) {
		const quantity = e.target.value;

		setItemQuantity(Number(quantity));
	}

	function handleAddCart() {
		setCartQty(itemQuantity);
	}

	return (
		<div className={styles.card}>
			<ProductTitle name='Brush' />
			<ProductImage />
			<Quantity
				quantity={itemQuantity}
				onClick={handleClick}
				onChange={handleChange}
			/>
			<Button
				name='Add to Cart'
				className={styles.InputNCartBtn}
				onClick={handleAddCart}
			/>
		</div>
	);
}

function ProductTitle({ name }) {
	return (
		<h1 className={`${styles.cardTitle} ${styles.InputNCartBtn}`}>{name}</h1>
	);
}

function ProductImage({ url }) {
	return <img src={url} alt='' />;
}

function Quantity({ quantity, onClick, onChange }) {
	return (
		<>
			<input
				type='tel'
				className={`${styles.InputNCartBtn} ${styles.cardTitle}`}
				value={quantity}
				onChange={onChange}
			/>
			<Button name='-' onClick={onClick} />
			<Button name='+' onClick={onClick} />
		</>
	);
}

function Button({ name, className = name, onClick }) {
	return (
		<button className={className} onClick={onClick}>
			{name}
		</button>
	);
}
