import { useState } from 'react';

export default function Card() {
	return (
		<div>
			<ProductTitle />
			<ProductImage />
			<Quantity />
		</div>
	);
}

function ProductTitle({ name }) {
	return <h1>{name}</h1>;
}

function ProductImage({ url }) {
	return <img src={url} alt='' />;
}

function Quantity() {
	const [itemNumber, setItemNumber] = useState(0);

	function handleClick(e) {
		const btnName = e.target.textContent;

		btnName === 'Decrement'
			? setItemNumber((n) => (n === 0 ? 0 : n - 1))
			: setItemNumber((n) => n + 1);
	}

	return (
		<>
			<input type='number' value={itemNumber} />
			<Button name='Decrement' onClick={handleClick} />
			<Button name='Increment' onClick={handleClick} />
		</>
	);
}

function Button({ name, onClick }) {
	return <button onClick={onClick}>{name}</button>;
}
