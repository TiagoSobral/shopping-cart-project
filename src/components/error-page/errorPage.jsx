import { useRouteError } from 'react-router';
import styles from './errorPage.module.css';

export function ErrorPage() {
	const error = useRouteError();
	return (
		<section className={styles.errorPage}>
			<h1>Oops!</h1>
			<h2>Sorry, an unexpected error has occurred.</h2>
			<h3>{error.statusText || error.message}</h3>
		</section>
	);
}
