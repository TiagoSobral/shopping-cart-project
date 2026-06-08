import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';
// import userEvent from '@testing-library/user-event';
import ShopPage from '../shop-page/ShopPage';
import App from '../App';
import { createMemoryRouter, MemoryRouter, RouterProvider } from 'react-router';
import { routes } from '../../routes.jsx';
import userEvent from '@testing-library/user-event';
// import { createRoot } from 'react-dom/client';

const products = [
	{
		ref: 'da123',
		url: 'url_test',
		name: 'name_test',
		brand: 'brand_test',
		description: 'description_test',
		price: 20,
		quantity: 1,
	},
];

window.fetch = vi.fn(() => Promise.resolve({ json: () => products }));
const route = createMemoryRouter(routes, {
	initialEntries: ['/'],
});

describe('Navigation Bar', () => {
	it('navigation bar component is rendered', () => {
		render(<RouterProvider router={route} />);

		const nav = screen.getByRole('navigation');

		expect(nav).toBeInTheDocument();
	});

	it('renders 3 buttons', () => {
		render(<RouterProvider router={route} />);

		const productsBtn = screen.getByRole('button', { name: 'PRODUCTS' });
		const homeBtn = screen.getByRole('button', { name: /TYPOLOGY./i });
		const cartBtn = screen.getByRole('button', { name: 'CART' });

		expect(productsBtn).toBeInTheDocument();
		expect(homeBtn).toBeInTheDocument();
		expect(cartBtn).toBeInTheDocument();
	});

	it('products are rendered', async () => {
		await render(<RouterProvider router={route} />);

		const user = userEvent.setup();
		const productsBtn = screen.getByRole('link', { name: 'PRODUCTS' });

		await user.click(productsBtn);

		const card = screen.getByTestId('card');

		expect(card).toBeInTheDocument();
	});

	it('Input changes with increase & decrease', async () => {
		const route = createMemoryRouter(routes, {
			initialEntries: ['/'],
		});

		await render(<RouterProvider router={route} />);

		const user = userEvent.setup();

		const productsBtn = screen.getByRole('link', { name: 'PRODUCTS' });

		await user.click(productsBtn);

		const plusBtn = screen.getByRole('button', { name: '+' });
		const minusBtn = screen.getByRole('button', { name: '-' });

		await user.click(plusBtn);
		await user.click(plusBtn);
		await user.click(minusBtn);

		const inputField = screen.getByRole('textbox');

		expect(inputField.value).toEqual('2');
	});
});

/* Tests: 
- check if input field can be changed
- check when add product to cart if cart button becomes a number */
