export default function handleClick(e, callback) {
	const btnName = e.target.textContent;
	console.log(btnName);

	btnName === '-'
		? callback((n) => (n === 0 ? 0 : n - 1))
		: callback((n) => n + 1);
}
