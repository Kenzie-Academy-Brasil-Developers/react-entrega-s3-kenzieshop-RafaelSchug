import { ADD_TO_CART } from "./actionTypes"

const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        product,
    }
}

export default addToCart;