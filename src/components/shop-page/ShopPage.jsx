import styles from './ShopPage.module.css';
import Banner from '../banner/Banner.jsx';
import NavigationBar from '../navigation-bar/NavigationBar.jsx';
import handleClick from '../../helper-functions/helper-functions.jsx';
import { useState } from 'react';

export default function ShopPage({ cartItems, setCartItems, setPage }) {
	return (
		<>
			<header>
				<Banner />
				<NavigationBar itemsQty={cartItems} setPage={setPage} />
			</header>
			<main>
				<Cards setCartItems={setCartItems} />
			</main>
		</>
	);
}

function Cards({ setCartItems }) {
	return (
		<div className={styles.cards}>
			<Card setCartItems={setCartItems} />
			<Card setCartItems={setCartItems} />
			<Card setCartItems={setCartItems} />
		</div>
	);
}

function Card({ setCartItems }) {
	const [itemQuantity, setItemQuantity] = useState(0);

	function handleChange(e) {
		const quantity = e.target.value;

		setItemQuantity(Number(quantity));
	}

	function handleAddCart() {
		setCartItems(itemQuantity);
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
