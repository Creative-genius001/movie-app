import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCards from "./MovieCards";

const RatedTvShow = () => {
	const [ratedShow, setRatedShow] = useState([]);
	useEffect(() => {
		const getRatedShow = async () => {
			const check =
				localStorage.getItem("ratedShow");

			if (check) {
				setRatedShow(JSON.parse(check));
			} else {
				const response = await axios
					.get(
						`https://api.themoviedb.org/3/tv/top_rated?api_key=0a82a71f7db762d5f3249e80ca6bc5db&language=en-US&page=1`,
					)
					.catch((err) => console.error(err));

				let res = response.data.results;

				localStorage.setItem(
					"ratedShow",
					JSON.stringify(res),
				);

				setRatedShow(res);
			}
		};
		getRatedShow();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="trending w-auto my-4 mx-auto">
			<h1 className=" text-[1.7rem] heading font-bold text-white">
				Rated TV Shows
			</h1>
			<MovieCards Movies={ratedShow} />;
		</div>
	);
};

export default RatedTvShow;
