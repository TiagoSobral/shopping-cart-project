import { useState } from 'react';

export default function Card() {
	return (
		<div>
			<img src='' alt='' />
			<Items />
		</div>
	);
}

function Items() {
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
