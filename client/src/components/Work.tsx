import React from "react";
import INFO from "../data/user";
import "./Work.css";

export default function Work() {
	return (
		<section id="work" className="reveal">
			<div className="work-header">
				<h2 className="section-label">Work Experience</h2>
				<span className="work-year-range">2022 — 2026</span>
			</div>
			<div className="work-list">
				{INFO.work.map((job, i) => (
					<div key={i} className="work-entry" style={{ '--i': i } as React.CSSProperties}>
						<div className="work-entry-top">
							<span className="work-role">{job.role}</span>
							<span className="work-duration">{job.duration}</span>
						</div>
						<span className="work-company">{job.company} · {job.location}</span>
						<ul className="work-bullets">
							{job.bullets.map((bullet, j) => (
								<li key={j}>{bullet}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
