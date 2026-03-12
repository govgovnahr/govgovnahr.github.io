import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import FadeInSection from "../components/common/FadeInSection";
import AllProjects from "../components/projects/allProjects";
import WorkTimeline from "../components/work/WorkTimeline";
import Skills from "../components/skills/Skills";
import Education from "../components/education/Education";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${INFO.main.title} | ${INFO.homepage.tagline}`}</title>
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
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-container">
						<FadeInSection>
							<div className="homepage-first-area">
								<div className="homepage-first-area-left-side">
									<div className="homepage-tagline">
										{INFO.homepage.tagline}
									</div>
									<h1 className="title homepage-title">
										{INFO.homepage.title}
									</h1>
									<div className="subtitle homepage-subtitle">
										{INFO.homepage.description}
									</div>
								</div>

								<div className="homepage-first-area-right-side">
									<div className="homepage-image-container">
										<div className="homepage-image-wrapper">
											<img
												src="homepage.jpg"
												alt="Govind Nair"
												className="homepage-image"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.resume.link}
								download
								className="resume-download-btn"
							>
								Download Resume
							</a>
						</div>
						</FadeInSection>

						<FadeInSection>
							<div className="homepage-section">
								<div className="homepage-section-title">
									Skills
								</div>
								<Skills skills={INFO.skills} />
							</div>
						</FadeInSection>

						<FadeInSection>
							<div className="homepage-section">
								<div className="homepage-section-title">
									Work Experience
								</div>
								<WorkTimeline work={INFO.work} />
							</div>
						</FadeInSection>

						<FadeInSection>
							<div className="homepage-section">
								<div className="homepage-section-title">
									Education
								</div>
								<Education education={INFO.education} />
							</div>
						</FadeInSection>

						<FadeInSection>
							<div className="homepage-section">
								<div className="homepage-section-title">
									Side Projects
								</div>
								<AllProjects />
							</div>
						</FadeInSection>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
