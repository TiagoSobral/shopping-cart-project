import styles from './NavigationBar.module.css';

function NavigationBar({ itemsQty, handlePage }) {
	return (
		<nav className={styles.navigationBanner}>
			<ul className={styles.list}>
				<li className='products'>
					<button className={styles.btn} data-testid='navLink' onClick={handlePage}>
						PRODUCTS
					</button>
				</li>
				<li className='homeLinkName'>
					<button
						className={styles.noLinkAppearance}
						data-testid='navLink'
						onClick={handlePage}
					>
						Typology.
						<p className={styles.paragraph}>PARIS</p>
					</button>
				</li>
				<li className='cartLink'>
					<button
						className={`${styles.btn} ${styles.cart}`}
						data-testid='cartLink'
						onClick={handlePage}
					>
						{itemsQty > 0 ? itemsQty : 'CART'}
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavigationBar;
