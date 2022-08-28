import React, {createContext, useReducer} from 'react';
import {ProductData, ToDoList} from './Data';

//Note - Redux can also be used here. But, This is not big project. So I ignored using Redux and continue using with useReducer & Context APIs.

export const Store = createContext('');

const initialState = {
  Items: ProductData,
  ToDo: ToDoList,
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_DO_LIST': {
      return {
        ...state,
        ToDo: action.payload.ToDo,
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
