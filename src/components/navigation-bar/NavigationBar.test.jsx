import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';
import ShopPage from '../shop-page/ShopPage';
import App from '../App';
import { createMemoryRouter, MemoryRouter, RouterProvider } from 'react-router';
import { routes } from '../../routes.jsx';
import userEvent from '@testing-library/user-event';

const products = [
	{
		id: 'da123',
		image_link: 'url_test',
		name: 'name_test',
		brand: 'brand_test',
		description: 'description_test',
		price: 20,
		quantity: 1,
	},
];

globalThis.fetch = vi.fn(
	async () => await Promise.resolve({ json: () => products }),
);

describe('Navigation Bar', () => {
	it('navigation bar component is rendered', () => {
		const route = createMemoryRouter(routes, {
			initialEntries: ['/'],
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
});

/* Tests: 
- check when add product to cart if cart button becomes a number */
