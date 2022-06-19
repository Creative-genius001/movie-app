import React from "react";
import MovieCards from "../components/MovieCards";

const Trending = ({ TrendingMovies }) => {
	return (
		<div className="trending w-auto my-4 mx-auto">
			<h1 className=" text-[1.7rem] heading font-bold text-white">
				Trending
			</h1>
			<MovieCards
				key={TrendingMovies.id}
				Movies={TrendingMovies}
			/>
			;
		</div>
	);
};

export default Trending;
