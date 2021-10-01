import { ADD_TO_CART, REMOVE_FROM_CART, PERFORM_CHECKOUT } from "./actionTypes"

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

export const performCheckout = (list) => {
    return {
        type: PERFORM_CHECKOUT,
        list,
    }
}

