import { useState } from 'react';

export default function Card() {
	const [itemQuantity, setItemQuantity] = useState(0);

	function handleClick(e) {
		const btnName = e.target.textContent;

		btnName === 'Decrement'
			? setItemQuantity((n) => (n === 0 ? 0 : n - 1))
			: setItemQuantity((n) => n + 1);
	}

	return (
		<div>
			<ProductTitle />
			<ProductImage />
			<Quantity quantity={itemQuantity} />
			<Button name='Add to Cart' onClick={handleClick} />
		</div>
	);
}

function ProductTitle({ name }) {
	return <h1>{name}</h1>;
}

function ProductImage({ url }) {
	return <img src={url} alt='' />;
}

function Quantity({ quantity, onClick }) {
	return (
		<>
			<input type='number' value={quantity} />
			<Button name='Decrement' onClick={onClick} />
			<Button name='Increment' onClick={onClick} />
		</>
	);
}

function Button({ name, onClick }) {
	return <button onClick={onClick}>{name}</button>;
}
