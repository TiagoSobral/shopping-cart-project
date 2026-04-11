import Banner from '../banner/Banner';
import NavigationBar from '../navigation-bar/NavigationBar';
import background from '../../assets/background-brush.jpg';

function HomePage({ items, setPage }) {
	return (
		<>
			<header>
				<Banner />
				<NavigationBar itemsQty={items} setPage={setPage} />
			</header>
			<main>
				<img className={background} alt='' />
			</main>
		</>
	);
}

export default HomePage;
