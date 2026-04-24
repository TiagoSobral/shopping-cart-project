import styles from './CartPage.module.css';
import { Button } from '../shop-page/ShopPage';

export default function CartPage({ cartItems, handleItemQty }) {
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
		<ul className={styles.list}>
			{cartItems.map((item) => (
				<Item item={item} handleItemQty={handleItemQty} />
			))}
		</ul>
	);
}

function Item({ item, handleItemQty }) {
	const price = item.price * item.quantity;

	return (
		<ul className={styles.list} key={item.ref}>
			<li>
				<img src={item.url} />
			</li>
			<li>{item.name}</li>
			<li>{item.description}</li>
			<li>{price}$</li>
			<input
				type='tel'
				className={`${styles.InputNCartBtn} ${styles.cardTitle}`}
				data-ref={item.ref}
				value={item.quantity}
				name='quantity'
			/>
			<Button name='+' handleClick={handleItemQty} />
			<Button name='-' handleClick={handleItemQty} />
		</ul>
	);
}
