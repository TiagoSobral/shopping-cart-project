import handleClick from '../../helper-functions/helper-functions';
import Banner from '../banner/Banner';
import NavigationBar from '../navigation-bar/NavigationBar';
import { Quantity } from '../shop-page/ShopPage';

export default function CartPage({ itemsCart, setItemQuantity }) {
	return (
		<>
			<header>
				<Banner />
				<NavigationBar />
			</header>
			<main>
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
		<ul>
			{items.map((item) => (
				<li>
					<Item item={item} setItemQuantity={setItemQuantity} />
				</li>
			))}
		</ul>
	);
}

function Item({ item, setItemQuantity }) {
	return (
		<ul>
			<li>
				<img src={item.src} />
			</li>
			<li>{item.name}</li>
			<li>{item.description}</li>
			<li>{item.price}</li>
			<li>
				<Quantity
					quantity={item.quantity}
					onClick={(e) => handleClick(e, setItemQuantity)}
				/>
			</li>
		</ul>
	);
}
