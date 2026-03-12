import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";
import FadeInSection from "../components/common/FadeInSection";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta
					name="description"
					content={currentSEO?.description ?? ""}
				/>
				<meta
					name="keywords"
					content={currentSEO?.keywords.join(", ") ?? ""}
				/>
				<meta name="author" content={INFO.main.title} />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<FadeInSection>
							<div className="title projects-title">
								What I've built.
							</div>

							<div className="subtitle projects-subtitle">
								Here's some of my project work as a software
								developer. Feel free to reach out if you have any
								questions!
							</div>
						</FadeInSection>

						<FadeInSection delay={100}>
							<div className="projects-list">
								<AllProjects />
							</div>
						</FadeInSection>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
