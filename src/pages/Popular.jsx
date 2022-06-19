import React, {
	useState,
	useEffect,
} from "react";
import axios from "axios";

const Popular = () => {
	const [popular, setPopular] = useState([]);

	const searchResult = async (data) => {
		const searchMovies = await axios
			.get(
				`
https://api.themoviedb.org/3/movie/popular?api_key=0a82a71f7db762d5f3249e80ca6bc5db&language=en-US&page=20`,
			)
			.catch((err) => console.error(err));

		setPopular(searchMovies.data.results);
	};
	useEffect(() => {
		searchResult();
	}, []);

	return (
		<div className="w-[100%] h-auto bg-[#060607] px-4">
			<div className=" w-[90%] mx-auto flex-row content-center justify-items-center py-4">
				<h1 className="text-4xl font-bold text-white">
					Results
				</h1>
				<div className=" flex flex-wrap ">
					{popular.map((movie) => {
						const IMG =
							"https://image.tmdb.org/t/p/original/" +
							movie.poster_path;
						return (
							<div
								key={movie.id}
								className="movie-card h-auto w-[12rem] mr-4 my-4 p-2 bg-[#191A1F] flex flex-wrap rounded-lg">
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

export default Popular;
