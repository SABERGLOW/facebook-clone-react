import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// higher order component, wraps the app inside StateProvider which shall provide our Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
	/**
	* A React hook that provides the state and dispatch functions for the application.           
    * @param {React.ReactNode} children - The children of the component.           
    * @returns None           
    */
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// to pull something from the data layer, we use this "useStateValue" hook
export const useStateValue = () => useContext(StateContext);
