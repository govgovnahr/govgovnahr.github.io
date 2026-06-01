import INFO from "../data/user";
import "./Sidebar.css";

interface SidebarProps {
	activeSection: string;
}

const NAV_ITEMS = [
	{ id: "work",      label: "Work" },
	{ id: "projects",  label: "Projects" },
	{ id: "skills",    label: "Skills" },
	{ id: "education", label: "Education" },
];

export default function Sidebar({ activeSection }: SidebarProps) {
	return (
		<div className="sidebar-content">
			<div className="sidebar-top">
				<div className="sidebar-avatar-outer">
					<div className="sidebar-avatar-inner">
						<img src="/homepage.jpg" alt={INFO.main.title} />
					</div>
				</div>
				<h1 className="sidebar-name">{INFO.main.title}</h1>
				<p className="sidebar-role">Full-Stack Software Engineer</p>
				<p className="sidebar-tagline">
					Building <em className="sidebar-em">AI-powered systems</em>
				</p>
				<span className="sidebar-badge">
					<span className="sidebar-badge-dot" />
					Available for new roles
				</span>
			</div>

			{(() => {
				const tally = INFO.projects.find((p) => p.featured);
				return tally ? (
					<a
						href={tally.link}
						target="_blank"
						rel="noopener noreferrer"
						className="sidebar-feature"
					>
						<span className="sidebar-feature-eyebrow">Premier Project</span>
						<span className="sidebar-feature-title">
							{tally.title}
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
						</span>
						<span className="sidebar-feature-desc">Personal finance agent built on RAG + LangGraph</span>
					</a>
				) : null;
			})()}

			<nav className="sidebar-nav" aria-label="Sections">
				{NAV_ITEMS.map((item) => (
					<a
						key={item.id}
						href={`#${item.id}`}
						className={`nav-link${activeSection === item.id ? " active" : ""}`}
					>
						<span className="nav-line" />
						{item.label}
					</a>
				))}
			</nav>

			<div className="sidebar-contact">
				<div className="sidebar-icons">
					<a
						href={INFO.socials.github}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
						</svg>
					</a>
					<a
						href={INFO.socials.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
							<rect x="2" y="9" width="4" height="12" />
							<circle cx="4" cy="4" r="2" />
						</svg>
					</a>
					<a href={`mailto:${INFO.main.email}`} aria-label="Email">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
							<polyline points="22,6 12,13 2,6" />
						</svg>
					</a>
				</div>
				<a href={INFO.resume.link} download className="btn-resume">
					Download Resume
					<span className="btn-icon-circle">↓</span>
				</a>
			</div>
		</div>
	);
}
