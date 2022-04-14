import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
//import Widgets from "./Widgets";
import Login from "./Login";
import {useStateValue} from "./StateProvider";

function App() {

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
						{/*... <Widgets/> ...*/}
					
					</div>
				</>
			)}
		</div>
	);
}

export default App;
