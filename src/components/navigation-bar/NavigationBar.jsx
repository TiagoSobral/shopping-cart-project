import styles from './NavigationBar.module.css';

function NavigationBar({ cartItems, handlePage }) {
	let cartQuantity = 0;
	if (cartItems != null) {
		cartQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
	}

	return (
		<nav className={styles.navigationBanner}>
			<ul className={styles.list}>
				<li className={`products ${styles.listItem}`}>
					<button
						className={styles.btn}
						data-testid='productsBtn'
						onClick={handlePage}
					>
						PRODUCTS
					</button>
				</li>
				<li className={`homeLinkName ${styles.listItem}`}>
					<button className={styles.btn} data-testid='homeBtn' onClick={handlePage}>
						Typology.
						<p className={styles.paragraph}>PARIS</p>
					</button>
				</li>
				<li className={`cartLink ${styles.listItem}`}>
					<button
						className={`${styles.btn} ${styles.cart}`}
						data-testid='cartBtn'
						onClick={handlePage}
					>
						{cartQuantity > 0 ? cartQuantity : 'CART'}
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavigationBar;
