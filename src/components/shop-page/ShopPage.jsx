import { useState } from 'react';

export default function Card() {
	const [itemQuantity, setItemQuantity] = useState(0);

	function handleClick(e) {
		const btnName = e.target.textContent;

		btnName === 'Decrement'
			? setItemQuantity((n) => (n === 0 ? 0 : n - 1))
			: setItemQuantity((n) => n + 1);
	}

	function handleChange(e) {
		const quantity = e.target.value;

		setItemQuantity(Number(quantity));
	}

	return (
		<div>
			<ProductTitle />
			<ProductImage />
			<Quantity
				quantity={itemQuantity}
				onClick={handleClick}
				onChange={handleChange}
			/>
			<Button name='Add to Cart' />
		</div>
	);
}

function ProductTitle({ name }) {
	return <h1>{name}</h1>;
}

function ProductImage({ url }) {
	return <img src={url} alt='' />;
}

function Quantity({ quantity, onClick, onChange }) {
	return (
		<>
			<input type='tel' value={quantity} onChange={onChange} />
			<Button name='Decrement' onClick={onClick} />
			<Button name='Increment' onClick={onClick} />
		</>
	);
}

function Button({ name, onClick }) {
	return <button onClick={onClick}>{name}</button>;
}
