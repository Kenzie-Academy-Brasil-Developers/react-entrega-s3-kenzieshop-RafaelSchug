import { ADD_TO_CART } from "./actionTypes";

const cartReducer = (state = [], action) => {
    switch (action.type){
        case ADD_TO_CART:
            const {product} = action;
            return [...state, product];

        default:
            return state;
    }
}

export default cartReducer;