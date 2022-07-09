import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Search = () => {
	const [search, setSearch] = useState("");

	const navigate = useNavigate();

	const handeSearch = (e) => {
		e.preventDefault();
		if (search !== "") {
			navigate("/searches/" + search);
			setSearch("");
		} else {
			return;
		}
	};

	return (
		<form onSubmit={handeSearch}>
			<div className="relative">
				<input
					className="searchbar w-[270px] bg-[#191A1F] text-white rounded-lg"
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
