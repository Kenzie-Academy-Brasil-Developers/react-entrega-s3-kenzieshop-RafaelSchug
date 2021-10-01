import {addToCart, removeFromCart} from "./actions";

export const addToCartThunk = (product) => (dispatch, globalStore) => {

    const {cart} = globalStore();
    const cartContainsItem = cart.some(item => item.id === product.id);
    let cartUpdated;

    if(!cartContainsItem) {
        cartUpdated = [...cart, {...product, quantity: 1}];
    } else {
        cartUpdated = cart.map(item => {
            if(item.id === product.id){
                return {...item, quantity: item.quantity + 1}
            } else {
                return item;
            }
        })
    }

    dispatch(addToCart(cartUpdated));
    localStorage.setItem('@cart', JSON.stringify(cartUpdated))

}

export const removeFromCartThunk = (id) => (dispatch, globalStore) => {
    const {cart} = globalStore();
    const cartUpdated = cart.filter(item => item.id !== id);
    dispatch(removeFromCart(cartUpdated));
    localStorage.setItem('@cart', JSON.stringify(cartUpdated))
}
