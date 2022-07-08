import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import Trending from "../components/Trending";
import Search from "../components/Search";
import RatedTvShow from "../components/RatedTvShow";

const Home = () => {
	const [TrendingMovies, setTrendingMovies] =
		useState([]);
	useEffect(() => {
		getTrendingMovies();
	}, []);

	const getTrendingMovies = async () => {
		const check = localStorage.getItem(
			"TrendingMovies",
		);

		if (check) {
			setTrendingMovies(JSON.parse(check));
		} else {
			const response = await axios
				.get(
					`https://api.themoviedb.org/3/trending/movie/day?api_key=0a82a71f7db762d5f3249e80ca6bc5db`,
				)
				.catch((err) => console.error(err));

			let res = response.data.results;

			localStorage.setItem(
				"TrendingMovies",
				JSON.stringify(res),
			);

			setTrendingMovies(res);
		}
	};

	return (
		<div className="w-[100%]  bg-[#060607] px-4 flex flex-col content-center justify-items-center py-4">
			<Trending TrendingMovies={TrendingMovies} />
			<RatedTvShow />
		</div>
	);
};

export default Home;
