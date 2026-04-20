import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Cards } from './ShopPage';
import ShopPage from './ShopPage';
import App from '../App';

describe('Product Quantity Buttons', () => {
	const items = [
		{
			ref: '1234',
			url: 'bla',
			name: 'Brush',
			quantity: 3,
			description: 'a beautiful brush 2mm',
			price: 12.0,
		},
	];

	it('handleItemQty gets called when increment or decrement clicked', async () => {
		const user = userEvent.setup();
		const handleItemQty = vi.fn();

		render(<ShopPage products={items} handleItemQty={handleItemQty} />);

		const incrementBtn = screen.getByRole('button', { name: '+' });
		const decrementBtn = screen.getByRole('button', { name: '-' });

		await user.click(incrementBtn);
		await user.click(decrementBtn);

		expect(handleItemQty).toHaveBeenCalledTimes(2);
	});

	it('handleChange gets called when user changes input number', async () => {
		const user = userEvent.setup();
		const handleChange = vi.fn();

		render(<ShopPage products={items} handleChange={handleChange} />);

		const input = screen.getByRole('textbox');

		await user.type(input, '2');

		expect(handleChange).toHaveBeenCalled();
	});

	it('handleAddCart gets called when cart button gets clicked', async () => {
		const user = userEvent.setup();
		const handleAddCart = vi.fn();

		render(<ShopPage products={items} handleAddCart={handleAddCart} />);

		const addCart = screen.getByRole('button', { name: /Add to Cart/i });

		await user.click(addCart);

		expect(handleAddCart).toHaveBeenCalled();
	});

	it('changes item quantity when user types', async () => {
		const user = userEvent.setup();

		render(<App />);

		const productsBtn = screen.getByTestId('productsBtn');

		await user.click(productsBtn);

		const input = screen.getAllByRole('textbox')[0];

		await user.type(input, '{backspace}2');

		expect(input.value).toEqual('2');
	});

	it('it increments by one when user clicks +', async () => {
		const user = userEvent.setup();

		render(<App />);

		const productsBtn = screen.getByTestId('productsBtn');

		await user.click(productsBtn);

		const input = screen.getAllByRole('textbox')[0];
		const incrementBtn = screen.getAllByRole('button', { name: '+' })[0];

		await user.click(incrementBtn);

		expect(input.value).toEqual('4');
	});
});
