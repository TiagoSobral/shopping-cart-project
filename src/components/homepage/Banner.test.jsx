import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';

describe('Banner Component', () => {
	it('renders banner content', () => {
		render(<Banner />);

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});

	it('contains the correct name', () => {
		render(<Banner />);

		expect(screen.getByRole('heading').textContent).toMatch(
			/Your skin evolves, your routine should too./i,
		);
	});
});
