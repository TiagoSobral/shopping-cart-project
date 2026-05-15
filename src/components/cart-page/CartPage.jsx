import styles from './CartPage.module.css';
import { Button } from '../shop-page/ShopPage';
import { useOutletContext } from 'react-router';

export default function CartPage() {
	const [, cartItems, , handleItemQty] = useOutletContext();
	return (
		<main className={styles.cart}>
			<Cart cartItems={cartItems} handleItemQty={handleItemQty} />
		</main>
	);
}

function Cart({ cartItems, handleItemQty }) {
	return (
		<>
			<h1>Order Summary</h1>
			<section>
				<Items cartItems={cartItems} handleItemQty={handleItemQty} />
			</section>
		</>
	);
}

function Items({ cartItems, handleItemQty }) {
	return (
		<>
			{cartItems.map((item) => (
				<Item item={item} handleItemQty={handleItemQty} key={item.ref} />
			))}
		</>
	);
}

function Item({ item, handleItemQty }) {
	const price = item.price * item.quantity;

	return (
		<ul className={styles.list} key={item.ref}>
			<li className={styles.imageContainer}>
				<img src={item.url} className={styles.image} />
			</li>
			<li>{item.name}</li>
			<li className={styles.description}>{item.description}</li>
			<li className={`${styles.price} ${styles.quantities}`}>{price}$</li>
			<li
				className={`${styles.InputNCartBtn} ${styles.cardTitle} ${styles.quantity} ${styles.quantities}`}
			>
				<input
					type='tel'
					data-ref={item.ref}
					value={item.quantity}
					name='quantity'
					className={styles.input}
				/>
			</li>
			<li className={styles.quantities}>
				<Button name='-' handleClick={handleItemQty} />
			</li>
			<li className={styles.quantities}>
				<Button name='+' handleClick={handleItemQty} />
			</li>
		</ul>
	);
}
