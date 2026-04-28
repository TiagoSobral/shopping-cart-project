export default function handleClick(e, callback) {
	const btnName = e.target.textContent;

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

export function addCart(cart, item) {
	if (cart === null) {
		return [item];
	} else {
		let itemInCart = cart.find((element) => element.ref == item.ref);
		if (itemInCart) {
			return cart.map((product) =>
				product.ref == item.ref
					? { ...product, quantity: product.quantity + item.quantity }
					: { ...product },
			);
		} else {
			return [...cart, item];
		}
	}
}
