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
	const route = createMemoryRouter(routes, { initialEntries: ['/'] });
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

	it('Images are rendered', async () => {
		render(<RouterProvider router={route} />);
		const user = userEvent.setup();

		const productsBtn = screen.getByRole('button', { name: 'PRODUCTS' });

		await user.click(productsBtn);

		const cards = screen.getAllByRole('presentation');

		expect(cards.length).toBeGreaterThan(1);
	});

	it('Input changes with increase & decrease', async () => {
		render(<RouterProvider router={route} />);
		const user = userEvent.setup();

		await user.click(screen.getByRole('button', { name: 'PRODUCTS' }));

		const inputField = screen.getAllByRole('textbox')[0];

		await user.click(screen.getAllByRole('button', { name: '+' })[0]);

		expect(inputField.textContent).toEqual(1);
	});
});

/* Tests: 
- check if products show up in main
- check increment and decrement on input field
- check if input field can be changed
- check when add product to cart if cart button becomes a number */
