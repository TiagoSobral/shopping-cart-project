export default function handleClick(e, callback) {
	const btnName = e.target.textContent;

	btnName === '-'
		? callback((n) => (n === 0 ? 0 : n - 1))
		: callback((n) => n + 1);
}

export function isDecreaseZero(quantity) {
	let result = 1;
	if (quantity > 1) {
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

export function changeBtnQty(products, signal, ref, callback) {
	if (signal === '+') {
		callback(
			products.map((item) =>
				item.ref == ref
					? {
							...item,
							quantity: item.quantity + 1,
						}
					: { ...item },
			),
		);
	} else {
		callback(
			products.map((item) => {
				return item.ref == ref
					? {
							...item,
							quantity: isDecreaseZero(item.quantity),
						}
					: { ...item };
			}),
		);
	}
}

export async function getInfo(callback) {
	return fetch(
		'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner&product_category=pencil',
	)
		.then((response) => response.json())
		.then((response) =>
			response.filter((item, index) => index != 0 && index != 1),
		)
		.then((response) =>
			callback(
				response.map((item) => ({
					ref: item.id,
					url: item.image_link,
					name: item.name,
					brand: item.brand,
					description: item.description,
					price: item.price,
					quantity: 1,
				})),
			),
		);
}
