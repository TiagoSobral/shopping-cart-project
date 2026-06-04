import App from './components/App';
import CartPage from './components/cart-page/CartPage';
import { ErrorPage } from './components/error-page/errorPage';
import HomePage from './components/homepage/Homepage';
import ShopPage from './components/shop-page/ShopPage';

export const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: '/shoppage', element: <ShopPage /> },
			{ path: '/cartpage', element: <CartPage /> },
		],
	},
];
