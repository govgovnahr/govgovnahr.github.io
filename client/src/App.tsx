import { useEffect, useState } from "react";
import "./app.css";
import Sidebar from "./components/Sidebar";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
	const [activeSection, setActiveSection] = useState("work");

	useEffect(() => {
		const revealEls = document.querySelectorAll<Element>(".reveal");
		const revealObs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						revealObs.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
		);
		revealEls.forEach((el) => revealObs.observe(el));

		const sections = document.querySelectorAll<Element>("section[id]");
		const activeObs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActiveSection(entry.target.id);
				});
			},
			{ threshold: 0, rootMargin: "-30% 0px -60% 0px" }
		);
		sections.forEach((s) => activeObs.observe(s));

		return () => {
			revealObs.disconnect();
			activeObs.disconnect();
		};
	}, []);

	return (
		<div className="app-layout">
			<aside className="sidebar-col">
				<Sidebar activeSection={activeSection} />
			</aside>
			<main className="content-col">
				<Work />
				<Projects />
				<Skills />
				<Education />
				<Footer />
			</main>
		</div>
	);
}
