import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import Trending from "../components/Trending";
import Search from "../components/Search";

const Home = () => {
	const [TrendingMovies, setTrendingMovies] =
		useState([]);
	useEffect(() => {
		const getTrendingMovies = async () => {
			const response = await axios
				.get(
					"https://api.themoviedb.org/3/trending/movie/day?api_key=0a82a71f7db762d5f3249e80ca6bc5db",
				)
				.catch((err) => console.error(err));

			setTrendingMovies(response.data.results);
		};

		getTrendingMovies();
	}, []);

	return (
		<div className="w-[100%] bg-[#060607] px-4 flex content-center justify-items-center">
			<Search />
			<Trending TrendingMovies={TrendingMovies} />
		</div>
	);
};

export default Home;
