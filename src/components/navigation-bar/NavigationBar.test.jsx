import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';

describe('Navigation Bar', () => {
	it('navigation bar component is rendered', () => {
		render(<NavigationBar />);

		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});

	it('navigation bar has 4 elements', () => {
		render(<NavigationBar />);

		expect(screen.getByRole('list')).toBeInTheDocument();
		expect(screen.getAllByRole('listitem').length).toEqual(4);
	});

	it('all are clickable links', () => {
		render(<NavigationBar />);

		const links = screen.getAllByTestId('navLink');

		expect(links.length).toEqual(4);
	});
});
