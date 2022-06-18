import React from "react";

const MovieCards = ({ Movies }) => {
	return (
		<div className="flex flex-wrap">
			{Movies.map((movie) => {
				const IMG =
					"https://image.tmdb.org/t/p/original/" +
					movie.poster_path;

				return (
					<div className="movie-card h-auto w-[12rem] mr-4 my-4 p-2 bg-[#191A1F] rounded-lg">
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
							<div className="flex flex-row mt-2">
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
	);
};

export default MovieCards;
