import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import MovieCards from "../components/MovieCards";
import { Keyboard } from "swiper";
import {
	Swiper,
	SwiperSlide,
} from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TailSpin } from "react-loader-spinner";

const MovieDetail = () => {
	const params = useParams();
	const [detail, setDetail] = useState({});
	const [similarMovies, setSimilarMovies] =
		useState([]);
	const [casts, setCasts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [trailerUrl, setTrailerUrl] =
		useState("");

	useEffect(() => {
		getMovieDetail(params.id);
	}, [params.id]);

	useEffect(() => {
		setLoading(true);
		getSimilarMovies(params.id);
	}, [params.id]);

	useEffect(() => {
		getTrailer(params.id);
	}, [params.id]);

	useEffect(() => {
		setLoading(true);
		getmovieCasts(params.id);
	}, [params.id]);

	//Get Similar Movies
	const getSimilarMovies = async (id) => {
		const { data } = await axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}/similar?api_key=0a82a71f7db762d5f3249e80ca6bc5db&language=en-US&page=1`,
			)
			.catch((err) => console.error(err));

		await setSimilarMovies(data.results);
		setLoading(false);
	};

	//Get movie Cast
	const getmovieCasts = async (id) => {
		const { data } = await axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}/credits?api_key=0a82a71f7db762d5f3249e80ca6bc5db&language=en-US`,
			)
			.catch((err) => console.error(err));

		let result = data.cast.slice(0, 10);
		await setCasts(result);
		setLoading(false);
	};

	//Get Movie Detail
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

	const getTrailer = async (id) => {
		const { data } = await axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}/videos?api_key=0a82a71f7db762d5f3249e80ca6bc5db&language=en-US`,
			)
			.catch((err) => console.error(err));

		setTrailerUrl(data.results[0].key);
	};

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	if (loading) {
		return (
			<TailSpin
				color="#00BFFF"
				height={80}
				width={80}
			/>
		);
	}

	return (
		<div className="w-[90%] mx-auto">
			<div className="backdrop relative w-[100%] lg:h-[60vh] overflow-hidden sm:h-[30%]">
				<img
					src={IMG}
					className="object-cover object-center w-full h-full"
					alt={detail.title}
				/>
			</div>
			<div className="movie-trailer mb-2 w-[100%]">
				<YouTube
					videoId={trailerUrl}
					opts={opts}
				/>
			</div>
			<div>
				<div className="w-full">
					<h1 className="text-white leading-[1] text-[3rem] font-semibold mb-8">
						{detail.title}
					</h1>
					<div className="flex flex-wrap w-ful">
						{detail.genres?.map((genre) => {
							return (
								<span
									key={genre.id}
									className="text-white bg-[#ff06063f] mt-2 rounded-[2rem] px-3 py-2 mr-4">
									{genre.name}
								</span>
							);
						})}
					</div>
				</div>
				<div className="text-white my-4 md:text-[1.3rem] sm:text-[1.1rem] lg:w-[60%] sm:w-[100%]">
					<p className="sm:leading-snug ">
						{detail.overview}
					</p>
				</div>
			</div>
			<div className="movie-casts">
				<h1 className="text-white text-[2rem] font-semibold mb-6">
					Starring
				</h1>
				<Swiper
					slidesPerView={2.5}
					spaceBetween={0}
					centeredSlides={false}
					slidesPerGroupSkip={1}
					grabCursor={true}
					navigation={false}
					keyboard={{
						enabled: true,
					}}
					breakpoints={{
						640: {
							slidesPerView: 3,
							slidesPerGroup: 1,
						},
						900: {
							slidesPerView: 5,
							slidesPerGroup: 1,
						},
						1200: {
							slidesPerView: 5,
							slidesPerGroup: 2,
						},
					}}
					modules={[Keyboard]}
					className="mySwiper">
					{casts?.map((cast) => {
						const IMG =
							"https://image.tmdb.org/t/p/original/" +
							cast.profile_path;
						return (
							<SwiperSlide className="flex flex-col justify-center items-center  w-[190px] h-auto mb-4">
								<div className="w-[50%] mb-2 rounded-[50%] overflow-hidden">
									<img
										src={IMG}
										alt={cast.original_name}
										className="img h-20 md:h-28 w-full h-full object-cover  "
									/>
								</div>
								<div className="flex flex-col flex-wrap justify-center items-center">
									<h4 className="text-white text-center font-bold md:text-[1.2rem] sm:text-[1rem]">
										{cast.original_name}
									</h4>
									<p className="text-white text-center sm:text-[0.8rem] ">
										{cast.character}
									</p>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<div className="movies-similar py-8">
				<h1 className="text-white text-[2rem] font-semibold mb-2">
					Similar Movies
				</h1>
				<div>
					<MovieCards Movies={similarMovies} />
				</div>
			</div>
		</div>
	);
};

export default MovieDetail;
