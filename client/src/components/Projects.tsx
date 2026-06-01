import React from "react";
import INFO from "../data/user";
import "./Projects.css";

export default function Projects() {
	const featured = INFO.projects.find((p) => p.featured);
	const secondary = INFO.projects.filter((p) => !p.featured);

	return (
		<section id="projects" className="reveal">
			<h2 className="section-label">Projects</h2>

			{featured && (
				<div className="project-featured">
					<div className="project-featured-inner">
						<span className="featured-eyebrow">Featured Project</span>
						<div className="project-media-slot">
							<span className="project-media-label">Demo coming soon</span>
						</div>
						<div className="project-header">
							<span className="project-name">{featured.title}</span>
							<a
								href={featured.link}
								target="_blank"
								rel="noopener noreferrer"
								className="badge-live"
							>
								Live ↗
							</a>
						</div>
						<p className="project-desc">{featured.description}</p>
						{featured.tech && (
							<div className="project-tags">
								{featured.tech.map((t) => (
									<span key={t} className="tag">{t}</span>
								))}
							</div>
						)}
						<a
							href={featured.link}
							target="_blank"
							rel="noopener noreferrer"
							className="project-link-featured"
						>
							{featured.linkText} ↗
						</a>
					</div>
				</div>
			)}

			<div className="project-secondary-row">
				{secondary.map((p, i) => (
					<div
						key={i}
						className="project-card"
						style={{ '--i': i } as React.CSSProperties}
					>
						<span className="project-number">0{i + 2}</span>
						<div className="project-card-inner">
							<div className="project-header">
								<span className="project-name">{p.title}</span>
							</div>
							<p className="project-desc">{p.description}</p>
							{p.tech && (
								<div className="project-tags">
									{p.tech.map((t) => (
										<span key={t} className="tag">{t}</span>
									))}
								</div>
							)}
							<a
								href={p.link}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link"
							>
								{p.linkText} ↗
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
