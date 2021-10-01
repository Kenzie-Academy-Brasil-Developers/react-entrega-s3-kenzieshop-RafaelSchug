import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes"

export const addToCart = (list) => {
    return {
        type: ADD_TO_CART,
        list,
    }
}

export const removeFromCart = (list) => {
    return {
        type: REMOVE_FROM_CART,
        list,
    }
}

