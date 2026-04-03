import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './ShopPage';

describe('Product Quantity Buttons', () => {
	it('Increment item quantity', async () => {
		const user = userEvent.setup();

		render(<Card />);

		const input = screen.getByRole('spinbutton');
		const increment = screen.getByText('Increment');

		await user.click(increment);
		await user.click(increment);

		expect(Number(input.value)).toEqual(2);
	});

	it('Increment item quantity', async () => {
		const user = userEvent.setup();

		render(<Card />);

		const input = screen.getByRole('spinbutton');
		const decrement = screen.getByText('Decrement');

		await user.click(decrement);
		await user.click(decrement);

		expect(Number(input.value)).toEqual(0);
	});
});
