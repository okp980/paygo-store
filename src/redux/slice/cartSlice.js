import { createSlice } from "@reduxjs/toolkit";

function findProduct(products, product) {
	return products.find((prod) => product.id === prod.id);
}
function findById(products, id) {
	return products.find((prod) => id === prod.id);
}

const CartSlice = createSlice({
	name: "cart",
	initialState: { items: [], amount: 0 },
	reducers: {
		addToCart: (state, action) => {
			const product = action.payload;
			const isProduct = findProduct(state.items, product);
			if (!isProduct) {
				state.items.push({
					...product,
					quantity: 1,
					totalPrice: product.price,
				});
				state.amount += product.price;
			} else {
				if (isProduct.quantity >= 10) return;
				const newItems = state.items.map((prod) =>
					isProduct.id === prod.id
						? {
								...prod,
								quantity: prod.quantity + 1,
								totalPrice: (prod.quantity + 1) * product.price,
						  }
						: prod
				);
				state.items = newItems;
				state.amount += product.price;
			}
		},
		deleteFromCart: (state, action) => {
			const productId = action.payload;
			const isProduct = findById(state.items, productId);
			if (!isProduct) return;
			const calculatedProductAmount = isProduct.quantity * isProduct.price;
			const filteredItems = state.items.filter(
				(prod) => isProduct.id !== prod.id
			);
			state.items = filteredItems;
			state.amount -= calculatedProductAmount;
		},
		increaseQty: (state, action) => {
			// accept product from payload
			// increase product quantity in cart
			//check if item already exits by using array.find to get the object back
			//if it doesnt exist return
			//if it exists
			// return a new array of items with array.map to increase quantity by 1
			const productId = action.payload;
			const isProduct = findById(state.items, productId);
			if (!isProduct || isProduct.quantity === 10) return;
			const increasedItemQty = state.items.map((prod) =>
				isProduct.id === prod.id
					? {
							...prod,
							quantity: prod.quantity + 1,
							totalPrice: (prod.quantity + 1) * isProduct.price,
					  }
					: prod
			);
			state.items = increasedItemQty;
			state.amount += isProduct.price;
		},
		decreaseQty: (state, action) => {
			// accept product from payload
			// decrease product quantity in cart
			//check if item already exits by using array.find to get the object back
			//if it doesnt exist return
			//if it exists
			// if quantity === 1, return
			// if quantity > 2 return a new array of items with array.map to decrease quantity by 1
			const productId = action.payload;
			const isProduct = findById(state.items, productId);
			if (!isProduct || isProduct.quantity === 1) return;
			const decreasedItemQty = state.items.map((prod) =>
				isProduct.id === prod.id
					? {
							...prod,
							quantity: prod.quantity - 1,
							totalPrice: (prod.quantity - 1) * isProduct.price,
					  }
					: prod
			);
			state.items = decreasedItemQty;
			state.amount += isProduct.price;
		},
	},
});
export const CartActions = CartSlice.actions;
export default CartSlice;
