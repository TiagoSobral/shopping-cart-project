import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router';
import ShopPage from './components/shop-page/ShopPage.jsx';
import CartPage from './components/cart-page/CartPage.jsx';
import { ErrorPage } from './components/error-page/errorPage.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
