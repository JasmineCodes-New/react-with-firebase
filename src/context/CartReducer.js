import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartReducer = (state, action) => {
    const { shoppingCart, totalPrice, totalQty } = state;

    switch (action.type) {
        case 'ADD_TO_CART': {
            const check = shoppingCart.find(product => product.ProductID === action.id);
            if (check) {
                toast.info('This product is already in your cart', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                return state;
            } else {
                const product = action.product;
                product['qty'] = 1;
                product['TotalProductPrice'] = product.ProductPrice * product.qty;
                const updatedQty = totalQty + 1;
                const updatedPrice = totalPrice + product.ProductPrice;
                return {
                    shoppingCart: [product, ...shoppingCart],
                    totalPrice: updatedPrice,
                    totalQty: updatedQty
                };
            }
        }

        case 'INC': {
            const { cart, id } = action;
            const product = cart;
            product.qty = ++product.qty;
            product.TotalProductPrice = product.qty * product.ProductPrice;
            const updatedQty = totalQty + 1;
            const updatedPrice = totalPrice + product.ProductPrice;
            const index = shoppingCart.findIndex(cart => cart.ProductID === id);
            shoppingCart[index] = product;
            return {
                shoppingCart: [...shoppingCart],
                totalPrice: updatedPrice,
                totalQty: updatedQty
            };
        }
        

        case 'DEC': {
            const { cart, id } = action;
            const product = cart;
            if (product.qty > 1) {
                product.qty = product.qty - 1;
                product.TotalProductPrice = product.qty * product.ProductPrice;
                const updatedPrice = totalPrice - product.ProductPrice;
                const updatedQty = totalQty - 1;
                const index = shoppingCart.findIndex(cart => cart.ProductID === id);
                shoppingCart[index] = product;
                return {
                    shoppingCart: [...shoppingCart],
                    totalPrice: updatedPrice,
                    totalQty: updatedQty
                };
            } else {
                return state;
            }
        }

        case 'DELETE': {
            const { cart, id } = action;
            const filtered = shoppingCart.filter(product => product.ProductID !== id);
            const product = cart;
            const updatedQty = totalQty - product.qty;
            const updatedPrice = totalPrice - product.qty * product.ProductPrice;
            return {
                shoppingCart: [...filtered],
                totalPrice: updatedPrice,
                totalQty: updatedQty
            };
        }

        case 'EMPTY':
            return {
                shoppingCart: [], totalPrice: 0, totalQty: 0
            }

        default:
            return state;
    }
}
