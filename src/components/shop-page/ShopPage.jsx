import styles from './ShopPage.module.css';

export default function ShopPage({
	products = 0,
	handleChange,
	handleItemQty,
	handleAddCart,
}) {
	return (
		<main>
			<Cards
				products={products}
				handleChange={handleChange}
				handleItemQty={handleItemQty}
				handleAddCart={handleAddCart}
			/>
		</main>
	);
}

export function Cards({
	products,
	handleChange,
	handleItemQty,
	handleAddCart,
}) {
	return (
		<ul className={styles.cards}>
			{products.map((item) => (
				<Card
					item={item}
					handleChange={handleChange}
					handleItemQty={handleItemQty}
					handleAddCart={handleAddCart}
					key={item.ref}
				/>
			))}
		</ul>
	);
}

function Card({ item, handleChange, handleItemQty, handleAddCart }) {
	return (
		<li className={styles.card} data-ref={item.ref}>
			<h1 className={`${styles.cardTitle} ${styles.InputNCartBtn}`}>
				{item.name}
			</h1>
			<img src={item.url} alt='' />
			<input
				type='tel'
				className={`${styles.InputNCartBtn} ${styles.cardTitle}`}
				value={item.quantity}
				onChange={handleChange}
			/>
			<Button name='-' handleClick={handleItemQty} />
			<Button name='+' handleClick={handleItemQty} />
			<Button
				name='Add to Cart'
				className={styles.InputNCartBtn}
				handleClick={handleAddCart}
			/>
		</li>
	);
}

export function Button({ name, className = name, handleClick }) {
	return (
		<button className={className} onClick={handleClick}>
			{name}
		</button>
	);
}
