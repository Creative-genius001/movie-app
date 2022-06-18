import React from "react";
import MovieCards from "../components/MovieCards";

const Trending = ({ TrendingMovies }) => {
	//console.log(TrendingMovies);
	return (
		<div className="trending px-2">
			<h1 className="heading font-bold text-white">
				Trending
			</h1>
			<MovieCards Movies={TrendingMovies} />;
		</div>
	);
};

export default Trending;
