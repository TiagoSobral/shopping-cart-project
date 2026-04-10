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
				setItemQuantity={setItemQuantity}
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

export function Quantity({ quantity, setItemQuantity, onClick, onChange }) {
	return (
		<>
			<input
				type='tel'
				className={`${styles.InputNCartBtn} ${styles.cardTitle}`}
				value={quantity}
				onChange={onChange}
			/>
			<Button name='-' onClick={onClick} setItemQuantity={setItemQuantity} />
			<Button name='+' onClick={onClick} setItemQuantity={setItemQuantity} />
		</>
	);
}

function Button({ name, className = name, setItemQuantity, onClick }) {
	return (
		<button className={className} onClick={(e) => onClick(e, setItemQuantity)}>
			{name}
		</button>
	);
}

// increment and decrement function

function handleClick(e, callback) {
	const btnName = e.target.textContent;
	console.log(btnName);

	btnName === '-'
		? callback((n) => (n === 0 ? 0 : n - 1))
		: callback((n) => n + 1);
}
