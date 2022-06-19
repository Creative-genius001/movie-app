import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const NavBar = () => {
	return (
		<div className="w-full flex justify-between items-center content-center bg-[#060607] py-3 px-8 lg:flex-row">
			<h1 className="font-bold text-[3rem] text-red-600">
				<NavLink to="/">NETMOVIES</NavLink>
			</h1>
			<Search />
			<div className="m-4 w-[500px] nav bg-[#060607]">
				<ul className="list-none flex justify-around font-medium text-white text-[1.5rem]">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "text-[#DC2626]" : ""
							}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/popular">
							Popular
						</NavLink>
					</li>
					<li>
						<NavLink to="/tvshows">
							TV Shows
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);

	const active = {
		color: "#DC2626",
	};
};

export default NavBar;
