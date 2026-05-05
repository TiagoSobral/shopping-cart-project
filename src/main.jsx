import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router';
import ShopPage from './components/shop-page/ShopPage.jsx';
import CartPage from './components/cart-page/CartPage.jsx';
import { ErrorPage } from './components/error-page/errorPage.jsx';
import HomePage from './components/homepage/Homepage.jsx';
import NavigationBar from './components/navigation-bar/NavigationBar.jsx';

const router = createBrowserRouter([
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
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
