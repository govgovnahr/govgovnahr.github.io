import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

interface ProjectProps {
	logo: string;
	title: string;
	description: string;
	linkText?: string;
	link: string;
	tech?: string[];
}

const Project: React.FC<ProjectProps> = ({
	logo,
	title,
	description,
	linkText,
	link,
	tech,
}) => {
	return (
		<React.Fragment>
			<div className="project">
				<a href={link} target="_blank" rel="noreferrer">
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						{tech && tech.length > 0 && (
							<div className="project-tech">
								{tech.map((t) => (
									<span className="project-tech-chip" key={t}>{t}</span>
								))}
							</div>
						)}
						{linkText && (
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">
									{linkText}
								</div>
							</div>
						)}
					</div>
				</a>
			</div>
		</React.Fragment>
	);
};

export default Project;
