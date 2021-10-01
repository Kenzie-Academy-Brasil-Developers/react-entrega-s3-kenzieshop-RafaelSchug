import LIST_PRODUCTS from "./actionTypes";

const initialState = [
    {
        name: "Smartphone Xiaomi Note 8 64GB Rom 4GB Ram",
        img: "https://m.media-amazon.com/images/I/51wgmCYDFML._AC_SX679_.jpg",
        price: 1110.00
    },
    {
        name: "XIAOMI 7622 Pulseira Smart Mi Band 6",
        img: "https://m.media-amazon.com/images/I/518Iz2nOCcL._AC_SX522_.jpg",
        price: 232.00
    },
    {
        name: "Headphone Freedoom 2 Sound BT",
        img: "https://m.media-amazon.com/images/I/51WANCmFcQL._AC_SX679_.jpg",
        price: 249.00
    }
]


const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_PRODUCTS:
            return state;
        default:
            return state;
    }
}

export default productsReducer;