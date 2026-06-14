import { describe, expect, it, vi } from 'vitest';
import CartPage from './CartPage';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { routes } from '../../routes';

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

describe('Cart Page', () => {
	it('renders item in cart', async () => {
		const route = createMemoryRouter(routes, {
			initialEntries: ['/shoppage'],
		});
		render(<RouterProvider router={route} />);

		const user = userEvent.setup();

		const addCartBtn = await screen.findByRole('button', { name: 'Add to Cart' });

		await user.click(addCartBtn);

		const cartBtn = await screen.findByRole('link', { name: '1' });

		await user.click(cartBtn);

		const cartItem = await screen.findAllByRole('listitem');

		expect(cartItem.length).toBeGreaterThan(0);
	});

	it('increases or decreases quantity of item in cart', async () => {
		const route = createMemoryRouter(routes, {
			initialEntries: ['/shoppage'],
		});
		render(<RouterProvider router={route} />);

		const user = userEvent.setup();

		const addCartBtn = await screen.findByRole('button', { name: 'Add to Cart' });

		await user.click(addCartBtn);

		const cartBtn = await screen.findByRole('link', { name: '1' });

		await user.click(cartBtn);

		const input = await screen.findByRole('textbox');
		const increment = await screen.findByRole('button', { name: '+' });
		const decrement = await screen.findByRole('button', { name: '-' });

		await user.click(increment);
		await user.click(increment);

		expect(input.value).toEqual('1');
	});
});
