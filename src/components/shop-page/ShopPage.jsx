import styles from './ShopPage.module.css';

export default function ShopPage({
	cartItems,
	handleChange,
	handleItemQty,
	handleAddCart,
}) {
	return (
		<main>
			<Cards
				products={cartItems}
				handleChange={handleChange}
				handleItemQty={handleItemQty}
				handleAddCart={handleAddCart}
			/>
		</main>
	);
}

function Cards({ products, handleChange, handleItemQty, handleAddCart }) {
	return (
		<div className={styles.cards}>
			{products.map((item) => (
				<Card
					item={item}
					handleChange={handleChange}
					handleItemQty={handleItemQty}
					handleAddCart={handleAddCart}
				/>
			))}
		</div>
	);
}

function Card({ item, handleChange, handleItemQty, handleAddCart }) {
	return (
		<div className={styles.card}>
			<h1 className={`${styles.cardTitle} ${styles.InputNCartBtn}`}>
				{item.name}
			</h1>
			<img src={item.url} alt='' />
			<input
				type='tel'
				className={`${styles.InputNCartBtn} ${styles.cardTitle}`}
				data-ref={item.ref}
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
		</div>
	);
}

export function Button({ name, className = name, handleClick }) {
	return (
		<button className={className} onClick={handleClick}>
			{name}
		</button>
	);
}
