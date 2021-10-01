import {addToCart, removeFromCart} from "./actions";

export const addToCartThunk = (product) => (dispatch, globalStore) => {
    const {cart} = globalStore();
    const cartUpdated = [...cart, product];
    dispatch(addToCart(cartUpdated));
    localStorage.setItem('@cart', JSON.stringify(cartUpdated))
}

export const removeFromCartThunk = (id) => (dispatch, globalStore) => {
    const {cart} = globalStore();
    const cartUpdated = cart.filter(item => item.id !== id);
    dispatch(removeFromCart(cartUpdated));
    localStorage.setItem('@cart', JSON.stringify(cartUpdated))
}
