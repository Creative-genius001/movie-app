import React, { useState } from "react";
import axios from "axios";

const Search = () => {
	const [search, setSearch] = useState("");
	//const [SearchedMovies, setSearchedMovies] =
	useState([]);

	const handeSearch = (e) => {
		e.preventDefault();
		setSearch("apple");
		console.log(search);
		// const searchMovies = await axios.get(
		// 	`https://api.themoviedb.org/3/search/movie?api_key=0a82a71f7db762d5f3249e80ca6bc5db&query=${search}`,
		// );

		// await setSearchedMovies(searchMovies);

		//console.log(SearchedMovies);
		//console.log(search);
	};

	return (
		<div>
			<form onSubmit={handeSearch}>
				<input
					type="text"
					placeholder="search movies"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
			</form>
		</div>
	);
};

export default Search;
