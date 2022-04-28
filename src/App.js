import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Siderbar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widgets/Widgets";
import Login from "./Components/Login/Login";
import {useStateValue} from "./Components/Context API/StateProvider";

function App() {
	// eslint-disable-next-line no-unused-vars
	const [{user}, dispatch] = useStateValue();
	
	return (
		// BEM naming convention
		<div className='app'>
			{/*... If user is NULL, show Login Page ...*/}
			{!user ? 
				(<Login/>) : (
				<>
					{/*... Header Component with Logo, Search, Homepage Icon etc ...*/}
					<Header />
					{/*... App Body with Main Content ...*/}
					<div className="app__body">
						{/*... Side Bar ...*/}
						<Sidebar/>
						{/*... News Feed with Stories and Posts ...*/}
						<Feed/>
						{/*... Widgets ...*/}
						<Widgets/>

					</div>
				</>
			)}
		</div>
	);
}

export default App;
