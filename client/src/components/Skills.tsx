import React from "react";
import INFO from "../data/user";
import "./Skills.css";

export default function Skills() {
	return (
		<section id="skills" className="reveal">
			<h2 className="section-label">Skills</h2>
			<div className="skills-flat">
				{INFO.skills.map((s, i) => (
					<span key={s.name} className="pill" style={{ '--i': i } as React.CSSProperties}>{s.name}</span>
				))}
			</div>
		</section>
	);
}
