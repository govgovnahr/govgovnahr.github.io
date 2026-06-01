import INFO from "../data/user";
import "./Footer.css";

export default function Footer() {
	return (
		<footer>
			<div className="footer-inner">
				<div className="footer-left">
					<h2 className="footer-heading">Let's work together.</h2>
					<p className="footer-sub">
						Open to full-time roles in the SF Bay Area. Especially excited about AI-adjacent product engineering.
					</p>
				</div>
				<div className="footer-links">
					<a href={`mailto:${INFO.main.email}`} className="footer-link-row">
						<span>{INFO.main.email}</span>
						<span className="footer-arrow">↗</span>
					</a>
					<a href={INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link-row">
						<span>LinkedIn</span>
						<span className="footer-arrow">↗</span>
					</a>
					<a href={INFO.socials.github} target="_blank" rel="noopener noreferrer" className="footer-link-row">
						<span>GitHub</span>
						<span className="footer-arrow">↗</span>
					</a>
					<a href={INFO.resume.link} download className="footer-link-row">
						<span>Resume (PDF)</span>
						<span className="footer-arrow">↗</span>
					</a>
				</div>
			</div>
		</footer>
	);
}
