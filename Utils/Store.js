import React, {createContext, useReducer} from 'react';
import {ProductData} from './Data';

//Note - Redux can also be used here. But, This is not big project. So I ignored using Redux and continue using with useReducer & Context APIs.

export const Store = createContext('');

const initialState = {
  Items: ProductData,
  cart: [],
  total: 0,
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_ITEM_LIST': {
      return {
        ...state,
        Items: action.payload.Items,
      };
    }
    case 'CART_ADD_ITEM': {
      return {
        ...state,
        cart: action.payload.cart,
        total: action.payload.total,
      };
    }

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
  );
}
