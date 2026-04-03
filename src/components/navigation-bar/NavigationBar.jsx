import styles from './NavigationBar.module.css';

function NavigationBar() {
	return (
		<nav className={styles.navigationBanner}>
			<ul className={styles.list}>
				<li className='products'>
					<button className={styles.btn} data-testid='navLink' href=''>
						PRODUCTS
					</button>
				</li>
				<li className='homeLinkName'>
					<a className={styles.noLinkAppearance} data-testid='navLink' href=''>
						Typology.
						<p className={styles.paragraph}>PARIS</p>
					</a>
				</li>
				<li className='cartLink'>
					<button className={styles.btn} data-testid='navLink' href=''>
						CART
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavigationBar;
