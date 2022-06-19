import React, { useState } from "react";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Search = () => {
	const [search, setSearch] = useState("");

	const navigate = useNavigate();

	const handeSearch = async (e) => {
		e.preventDefault();
		if (search !== "") {
			navigate("/searches/" + search);
		} else {
			return;
		}
	};

	return (
		<form onSubmit={handeSearch}>
			<div className="relative">
				<input
					className="searchbar bg-[#191A1F] text-white rounded-lg"
					type="text"
					placeholder="search movies"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
				<BiSearchAlt className="icon" />
			</div>
		</form>
	);
};

export default Search;
