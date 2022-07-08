import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TvShows = () => {
	const [ratedShow, setRatedShow] = useState([]);
	useEffect(() => {
		getRatedShow();
	}, []);

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
			console.log(res);

			localStorage.setItem(
				"ratedShow",
				JSON.stringify(res),
			);

			setRatedShow(res);
		}
	};
	let navigate = useNavigate();
	const handleClick = (id) => {
		navigate("/details/" + id);
	};

	return (
		<div className="w-[100%] h-auto bg-[#060607] px-4">
			<div className=" w-[90%] mx-auto flex-row content-center justify-items-center py-4">
				<h1 className="text-4xl font-bold text-white">
					TV Shows
				</h1>
				<div className=" flex flex-wrap ">
					{ratedShow.map((movie) => {
						const IMG =
							"https://image.tmdb.org/t/p/original/" +
							movie.poster_path;
						return (
							<div
								onClick={() =>
									handleClick(movie.id)
								}
								key={movie.id}
								className="movie-card cursor-pointer h-auto w-[12rem] mr-4 my-4 p-2 bg-[#191A1F] flex flex-wrap rounded-lg">
								<div className="movie-img w-full">
									<img
										src={IMG}
										alt={movie.title}
										className="img w-full h-60 object-cover rounded-lg"
									/>
								</div>
								<div className="movie-info w-full h-24 py-2 ">
									<h2 className="movie-title truncate ... text-white font-medium text-[1.1rem]">
										{movie.title}
									</h2>

									<p className="text-slate-300 text-[0.9rem] ">
										{movie.release_date}
									</p>
									<div className="flex flex-row align-center content-center mt-2">
										<h6 className="text-white mr-2 text-[0.9rem]">
											Rating:
										</h6>
										<div className="text-[0.8rem] font-medium badge bg-[#F5C518] ">
											<span>
												{movie.vote_average}
											</span>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default TvShows;
