import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
	return (
		// BEM naming convention
		<div className='app'>

			{/*... Header Component with Logo, Search, Homepage Icon etc ...*/}
			<Header />
			{/*... App Body with Main Content ...*/}
			<div className="app__body">
				{/*... Side Bar ...*/}
				<Sidebar/>
				{/*... News Feed with Stories and Posts ...*/}
				<Feed/>
				{/*... Widgets ...*/}
			</div>


		</div>
	);
}

export default App;
