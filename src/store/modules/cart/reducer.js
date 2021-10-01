import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem('@cart')) || [];

const cartReducer = (state = initialState, action) => {
    const {list} = action;

    switch (action.type){
        case ADD_TO_CART:
            return list;
        case REMOVE_FROM_CART:
            return list;
        default:
            return state;
    }
}

export default cartReducer;