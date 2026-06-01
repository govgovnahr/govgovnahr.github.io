import INFO from "../data/user";
import "./Education.css";

export default function Education() {
	const edu = INFO.education;
	return (
		<section id="education" className="reveal">
			<h2 className="section-label">Education</h2>
			<div className="edu-entry">
				<div className="edu-entry-top">
					<span className="edu-degree">{edu.degree}</span>
					<span className="edu-date">May 2023</span>
				</div>
				<span className="edu-school">{edu.school} · {edu.location}</span>
				<p className="edu-detail">Concentration: {edu.concentration}</p>
			</div>
		</section>
	);
}
