import { ADD_TO_CART, REMOVE_FROM_CART, PERFORM_CHECKOUT } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem('@cart')) || [];

const cartReducer = (state = initialState, action) => {
    const {list} = action;

    switch (action.type){
        case ADD_TO_CART:
            return list;
        case REMOVE_FROM_CART:
            return list;
        case PERFORM_CHECKOUT:
            return list;
        default:
            return state;
    }
}

export default cartReducer;