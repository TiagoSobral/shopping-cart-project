import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Cards } from './ShopPage';
import ShopPage from './ShopPage';
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

describe('Shop page', () => {
	it('products are rendered', async () => {
		const route = createMemoryRouter(routes, {
			initialEntries: ['/'],
		});
		await render(<RouterProvider router={route} />);

		const user = userEvent.setup();
		const productsBtn = screen.getByRole('link', { name: 'PRODUCTS' });

		await user.click(productsBtn);

		const card = screen.getByTestId('card');

		expect(card).toBeInTheDocument();
	});

	it('input changes with increase & decrease', async () => {
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

	it('input can changed by user without buttons', async () => {
		const route = createMemoryRouter(routes, {
			initialEntries: ['/shoppage'],
			initialIndex: 1,
		});

		await render(<RouterProvider router={route} />);

		const user = userEvent.setup();

		const inputField = await screen.findByRole('textbox');

		await user.type(inputField, '{backspace}2');

		expect(inputField.value).toEqual('2');
	});

	it('item gets added to cart', async () => {
		const route = createMemoryRouter(routes, {
			initialEntries: ['/shoppage'],
			initialIndex: 1,
		});

		await render(<RouterProvider router={route} />);

		const user = userEvent.setup();

		const addCartBtn = await screen.findByRole('button', { name: 'Add to Cart' });

		const cartBtn = await screen.findByRole('button', { name: 'CART' });

		await user.click(addCartBtn);

		expect(cartBtn.textContent).toEqual('1');
	});
});
