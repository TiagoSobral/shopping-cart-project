export default function handleClick(e, callback) {
	const btnName = e.target.textContent;
	console.log(btnName);

	btnName === '-'
		? callback((n) => (n === 0 ? 0 : n - 1))
		: callback((n) => n + 1);
}

export function isDecreaseZero(quantity) {
	let result = 0;
	if (quantity > 0) {
		result = quantity - 1;
	}
	return result;
}
