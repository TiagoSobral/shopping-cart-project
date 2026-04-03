import Banner from './Banner';
import NavigationBar from '../navigation-bar/NavigationBar';
import background from '../../assets/background-brush.jpg';

function HomePage() {
	return (
		<>
			<header>
				<Banner />
				<NavigationBar />
			</header>
			<main>
				<img className={background} alt='' />
			</main>
		</>
	);
}

export default HomePage;
