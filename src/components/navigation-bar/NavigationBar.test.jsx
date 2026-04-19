import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';
import userEvent from '@testing-library/user-event';
import ShopPage from '../shop-page/ShopPage';

describe('Navigation Bar', () => {
	it('navigation bar component is rendered', () => {
		render(<NavigationBar />);

		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});

	it('renders 3 buttons', () => {
		render(<NavigationBar />);

		const productsBtn = screen.getByRole('button', { name: 'PRODUCTS' });
		const homeBtn = screen.getByRole('button', { name: /TYPOLOGY./i });
		const cartBtn = screen.getByRole('button', { name: 'CART' });

		expect(productsBtn).toBeInTheDocument();
		expect(homeBtn).toBeInTheDocument();
		expect(cartBtn).toBeInTheDocument();
	});

	it('onClick is called when button is clicked', async () => {
		const onClick = vi.fn();
		render(<NavigationBar handlePage={onClick} />);
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
