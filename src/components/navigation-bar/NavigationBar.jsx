import styles from './NavigationBar.module.css';
import { Link } from 'react-router';

function NavigationBar({ cartItems }) {
	let cartQuantity = 0;
	if (cartItems != null) {
		cartQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
	}

	return (
		<nav className={styles.navigationBanner}>
			<ul className={styles.list}>
				<li className={`products ${styles.listItem}`}>
					<button className={styles.btn}>
						<Link to='shoppage'>PRODUCTS</Link>
					</button>
				</li>
				<li className={`homeLinkName ${styles.listItem}`}>
					<button className={styles.btn}>
						<Link to='/'>
							Typology. <p className={styles.paragraph}>PARIS</p>
						</Link>
					</button>
				</li>
				<li className={`cartLink ${styles.listItem}`}>
					<button className={`${styles.btn} ${styles.cart}`}>
						<Link to='cartpage'>{cartQuantity > 0 ? cartQuantity : 'CART'}</Link>
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavigationBar;
