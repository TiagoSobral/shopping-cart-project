import handleClick from '../../helper-functions/helper-functions';
import Banner from '../banner/Banner';
import NavigationBar from '../navigation-bar/NavigationBar';
import { Quantity } from '../shop-page/ShopPage';
import styles from './CartPage.module.css';

export default function CartPage({ itemsCart, setItemQuantity }) {
	return (
		<>
			<header>
				<Banner />
				<NavigationBar />
			</header>
			<main className={styles.cart}>
				<Cart items={itemsCart} setItemQuantity={setItemQuantity} />
			</main>
		</>
	);
}

function Cart({ items, setItemQuantity }) {
	return (
		<>
			<h1>Order Summary</h1>
			<section>
				<Items items={items} setItemQuantity={setItemQuantity} />
			</section>
		</>
	);
}

function Items({ items, setItemQuantity }) {
	return (
		<ul className={styles.list}>
			{items.map((item) => (
				<li>
					<Item item={item} setItemQuantity={setItemQuantity} />
				</li>
			))}
		</ul>
	);
}

function Item({ item, setItemQuantity }) {
	const price = item.price * item.quantity;

	return (
		<ul className={styles.list}>
			<li>
				<img src={item.src} />
			</li>
			<li>{item.name}</li>
			<li>{item.description}</li>
			<li>{price}$</li>
			<li>
				<Quantity
					quantity={item.quantity}
					onClick={(e) => handleClick(e, setItemQuantity)}
				/>
			</li>
		</ul>
	);
}
