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

	it('onClick is called when button is clicked', async () => {
		const onClick = vi.fn();
		render(<RouterProvider router={route} />);
		const user = userEvent.setup();

		const productsBtn = screen.getByRole('button', { name: 'PRODUCTS' });
		const homeBtn = screen.getByRole('button', { name: /TYPOLOGY./i });
		const cartBtn = screen.getByRole('button', { name: 'CART' });

		await user.click(productsBtn);
		await user.click(homeBtn);
		await user.click(cartBtn);

		expect(onClick).toHaveBeenCalled();
	});
});
