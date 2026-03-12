import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "./styles/navBar.css";

interface NavBarProps {
	active?: string;
}

const NavBar: React.FC<NavBarProps> = ({ active }) => {
	const [isDark, setIsDark] = useState(() => {
		const stored = localStorage.getItem("theme");
		const dark = stored ? stored === "dark" : true;
		document.documentElement.classList.toggle("light-mode", !dark);
		return dark;
	});

	useEffect(() => {
		document.documentElement.classList.toggle("light-mode", !isDark);
		localStorage.setItem("theme", isDark ? "dark" : "light");
	}, [isDark]);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li className="nav-item nav-theme-toggle">
								<button
									onClick={() => setIsDark((d) => !d)}
									aria-label="Toggle theme"
									className="theme-toggle-btn"
								>
									<FontAwesomeIcon
										icon={isDark ? faSun : faMoon}
									/>
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
