import React, {createContext, useContext, useReducer} from 'react';
import {reducerFunction} from './reducerFunction';

const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [dataState, dispatch] = useReducer(reducerFunction, {
    products: [],
    cartProducts: [],
  });
  return (
    <DataContext.Provider value={{dataState, dispatch}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
