import React, { useReducer } from 'react';
import axios from 'axios';
import { JSON_API } from '../helpers/constants';

export const productsContext = React.createContext();

const INIT_STATE = {
    products: []
}

const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "GET_PRODUCTS":
            return {...state, products: action.payload}
        default:
            return state
    }
}

const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function getProducts(){
        let { data } = await axios(`${JSON_API}/products`);
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }

    return (
        <productsContext.Provider value={{
            products: state.products,
            getProducts
        }}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;