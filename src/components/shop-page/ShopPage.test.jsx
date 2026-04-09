import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './ShopPage';
import ShopPage from './ShopPage';

describe('Product Quantity Buttons', () => {
	it('Increment item quantity', async () => {
		const user = userEvent.setup();

		render(<Card />);

		const input = screen.getByRole('textbox');
		const increment = screen.getByText('+');

		await user.click(increment);
		await user.click(increment);

		expect(Number(input.value)).toEqual(2);
	});

	it('Decrement item quantity', async () => {
		const user = userEvent.setup();

		render(<Card />);

		const input = screen.getByRole('textbox');
		const decrement = screen.getByText('-');

		await user.click(decrement);
		await user.click(decrement);

		expect(Number(input.value)).toEqual(0);
	});

	it('User changes item quantity manually', async () => {
		const user = userEvent.setup();

		render(<Card />);

		const input = screen.getByRole('textbox');

		await user.type(input, '2');

		expect(Number(input.value)).toEqual(2);
	});

	it('Adds item to cart', async () => {
		const user = userEvent.setup();

		render(<ShopPage />);

		const addCart = screen.getByRole('button', { name: /Add to Cart/i });
		const increment = screen.getByText('+');
		const cart = screen.getByTestId('cartLink');

		await user.click(increment);
		await user.click(addCart);

		expect(cart.textContent).toEqual('1');
	});
});
