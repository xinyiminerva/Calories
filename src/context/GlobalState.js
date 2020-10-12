
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
 calories: 
 [
   {text: "burger", amount: 100},
   {text: "ice cream", amount: 400},
 ]

}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function addCalories(cal) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: cal
    });
  }

  return (<GlobalContext.Provider value={{
    calories: state.calories,
    addCalories
  }}>
    {children}
  </GlobalContext.Provider>);
}