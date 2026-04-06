import styles from './NavigationBar.module.css';

function NavigationBar({ itemsQty }) {
	return (
		<nav className={styles.navigationBanner}>
			<ul className={styles.list}>
				<li className='products'>
					<button className={styles.btn} data-testid='navLink'>
						PRODUCTS
					</button>
				</li>
				<li className='homeLinkName'>
					<a className={styles.noLinkAppearance} data-testid='navLink'>
						Typology.
						<p className={styles.paragraph}>PARIS</p>
					</a>
				</li>
				<li className='cartLink'>
					<button className={`${styles.btn} ${styles.cart}`} data-testid='cartLink'>
						{itemsQty > 0 ? itemsQty : 'CART'}
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavigationBar;
