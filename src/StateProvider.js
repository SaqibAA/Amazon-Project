import React, { createContext, useReducer, useContext} from "react";



// Prepares the DataLayer

export const StateContext = createContext();

// Wrap our app provide the DataLayer

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from DataLayer
export const useStateValue = () => useContext(StateContext)