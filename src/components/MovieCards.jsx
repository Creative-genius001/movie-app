import React from "react";
import { useNavigate } from "react-router-dom";
// import Swiper JS
import {
	Keyboard,
	Navigation,
	Pagination,
	EffectFade,
} from "swiper";
import {
	Swiper,
	SwiperSlide,
} from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MovieCards = ({ Movies }) => {
	const navigate = useNavigate();

	const handleClick = (id) => {
		navigate("/detail/" + id);
	};

	return (
		<>
			<Swiper
				slidesPerView={2}
				spaceBetween={20}
				centeredSlides={false}
				slidesPerGroupSkip={1}
				grabCursor={true}
				keyboard={{
					enabled: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 3,
						slidesPerGroup: 2,
					},
					900: {
						slidesPerView: 4,
						slidesPerGroup: 2,
					},
					1200: {
						slidesPerView: 6,
						slidesPerGroup: 2,
					},
				}}
				navigation={false}
				pagination={{
					clickable: true,
				}}
				fadeEffect={{
					crossFade: true,
				}}
				modules={[
					Keyboard,
					Navigation,
					Pagination,
					EffectFade,
				]}
				className="mySwiper">
				{Movies.map((movie, index) => {
					const IMG =
						"https://image.tmdb.org/t/p/original/" +
						movie.poster_path;

					return (
						<div
							key={index}
							className="swiper-wrapper">
							<SwiperSlide
								onClick={() =>
									handleClick(movie.id)
								}
								className="movie-card cursor-pointer h-auto w-[12rem] my-4 p-2 bg-[#191A1F] rounded-lg">
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
							</SwiperSlide>
						</div>
					);
				})}
			</Swiper>
		</>
	);
};

export default MovieCards;
