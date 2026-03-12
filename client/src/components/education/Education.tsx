import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Education as EducationType } from "../../types";
import "./styles/education.css";

interface EducationProps {
	education: EducationType;
}

const Education: React.FC<EducationProps> = ({ education }) => {
	return (
		<div className="education-card">
			<div className="education-accent" />
			<div className="education-content">
				<div className="education-header">
					<div className="education-icon">
						<FontAwesomeIcon icon={faGraduationCap} />
					</div>
					<div className="education-meta">
						<div className="education-school">
							{education.school}
						</div>
						<div className="education-degree">
							{education.degree}
						</div>
						<div className="education-duration-location">
							<span>{education.duration}</span>
							<span className="education-sep">·</span>
							<span>{education.location}</span>
						</div>
					</div>
				</div>
				<div className="education-concentration">
					Concentration: {education.concentration}
				</div>
			</div>
		</div>
	);
};

export default Education;
