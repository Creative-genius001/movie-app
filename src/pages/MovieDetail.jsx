import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieDetail = () => {
	const params = useParams();
	const [detail, setDetail] = useState({});

	useEffect(() => {
		getMovieDetail(params.id);
	}, []);

	const getMovieDetail = async (id) => {
		const data = sessionStorage.getItem("detail");

		if (data) {
			sessionStorage.getItem(JSON.parse(data));
		}
		const movieDetail = await axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=0a82a71f7db762d5f3249e80ca6bc5db&language=en-US`,
			)
			.catch((err) => console.error(err));

		sessionStorage.setItem(
			"data",
			JSON.stringify(movieDetail.data),
		);

		setDetail(movieDetail.data);
	};

	const IMG =
		"https://image.tmdb.org/t/p/original/" +
		detail.backdrop_path;

	console.log(detail.video);
	return (
		<div>
			<div className="backdrop relative w-[100%] lg:h-[60vh] overflow-hidden sm:h-[30%]">
				<img
					src={IMG}
					className="object-cover object-center w-full h-full"
				/>
			</div>
			<div className="movie-info absolute ml-8 lg:mx-w-4xl md:max-w-xl sm:max-w-md flex flex-col md:shrink-0">
				<h1 className="text-white font-bold md:text-[3rem] mb-4 leading-none">
					{detail.title}
				</h1>
				<p className="text-white font-regular md:text-[1.1rem] sm:text-[0.9rem] leading-snug">
					{detail.overview}
				</p>
				<div>{(detail.video = true)}</div>
			</div>
		</div>
	);
};

export default MovieDetail;
