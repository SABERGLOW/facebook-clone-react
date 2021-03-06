import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./Components/Context API/StateProvider";
import reducer, { initialState } from "./Components/Context API/reducer";

	/**
   * A React component that provides the state management for the application. 
   * @param {StateProviderProps} props - The props for the StateProvider component. 
   * @returns A React component that provides the state management for the application. 
   */
ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
