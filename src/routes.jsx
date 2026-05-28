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
