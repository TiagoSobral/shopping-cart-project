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

describe('Navigation Bar', () => {
	it('navigation bar component is rendered', () => {
		const route = createMemoryRouter(routes, {
			initialEntries: ['/', '/shoppage'],
			initialIndex: 0,
		});

		render(<RouterProvider router={route} />);

		const nav = screen.getByRole('navigation');

		expect(nav).toBeInTheDocument();
	});

	it('renders 3 buttons', () => {
		const route = createMemoryRouter(routes, {
			initialEntries: ['/'],
		});
		render(<RouterProvider router={route} />);

		const productsBtn = screen.getByRole('button', { name: 'PRODUCTS' });
		const homeBtn = screen.getByRole('button', { name: /TYPOLOGY./i });
		const cartBtn = screen.getByRole('button', { name: 'CART' });

		expect(productsBtn).toBeInTheDocument();
		expect(homeBtn).toBeInTheDocument();
		expect(cartBtn).toBeInTheDocument();
	});

	it('Images are rendered', async () => {
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

		const route = await createMemoryRouter(routes, {
			initialEntries: ['/'],
		});
		await render(<RouterProvider router={route} />);
		const user = userEvent.setup();

		const productsBtn = screen.getByRole('link', { name: 'PRODUCTS' });

		await user.click(productsBtn);

		const card = screen.getByTestId('card');

		expect(card).toBeInTheDocument();
	});

	/* 	it('Input changes with increase & decrease', async () => {
		render(<RouterProvider router={route} />);
		const user = userEvent.setup();

		await user.click(screen.getByRole('button', { name: 'PRODUCTS' }));

		const inputField = screen.getAllByRole('textbox')[0];

		await user.click(screen.getAllByRole('button', { name: '+' })[0]);

		expect(inputField.textContent).toEqual(1);
	}); */
});

/* Tests: 
- check if products show up in main
- check increment and decrement on input field
- check if input field can be changed
- check when add product to cart if cart button becomes a number */
