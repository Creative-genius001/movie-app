import Home from "../src/pages/Home";
import {
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom";
import SeachedMovie from "./pages/SearchedMovie";
import NavBar from "./components/Navbar";
import MovieDetail from "./pages/MovieDetail";
import Popular from "./pages/Popular";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/searches/:search"
					element={<SeachedMovie />}
				/>
				<Route
					path="/detail/:id"
					element={<MovieDetail />}
				/>
				<Route
					path="/popular"
					element={<Popular />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
