import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Signup from "./components/user/Signup";
import Signin from "./components/user/Signin";
import Signout from "./components/user/Signout";

import CreateProfile from "./components/profile/createProfile";
import GetProfile from "./components/profile/getProfile";
import UpdateProfile from "./components/profile/updateProfile";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
						<li>
							<Link to="/signin">Sign In</Link>
						</li>
						<li>
							<Link to="/signout">Sign Out</Link>
						</li>

            <li>
							<Link to="/create-profile">Create Profile</Link>
						</li>
            <li>
							<Link to="/get/:id">Get Profile</Link>
						</li>

            <li>
							<Link to="/update/:id">Update Profile</Link>
						</li>

					</ul>
				</nav>
				<Routes>
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signout" element={<Signout />} />
					<Route path="/create-profile" element={<CreateProfile />} />
					<Route path="/get/:id" element={<GetProfile />} />
					<Route path="/update/:id" element={<UpdateProfile />} />

				</Routes>
			</Router>

			
		</Provider>
	);
}

export default App;
