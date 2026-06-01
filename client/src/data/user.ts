import { Project, WorkExperience, Skill, Education } from "../types";

interface Info {
	main: {
		title: string;
		email: string;
	};
	socials: {
		github: string;
		linkedin: string;
	};
	homepage: {
		tagline: string;
	};
	education: Education;
	projects: Project[];
	work: WorkExperience[];
	skills: Skill[];
	resume: {
		link: string;
	};
}

const INFO: Info = {
	main: {
		title: "Govind Nair",
		email: "govindnair28@gmail.com",
	},

	socials: {
		github: "https://github.com/govgovnahr",
		linkedin: "https://www.linkedin.com/in/govindnair2/",
	},

	homepage: {
		tagline: "Full-stack engineer building AI-powered systems",
	},

	education: {
		school: "University of Illinois at Urbana-Champaign",
		degree: "B.S. Engineering Physics, Minor in Computer Science",
		duration: "Aug 2019–May 2023",
		location: "Champaign, IL",
		concentration: "Computational Physics",
	},

	projects: [
		{
			title: "Tally AI",
			description:
				"A personal finance agent built on RAG and LangGraph — asks natural language questions about your own spending, routes between semantic search and SQL depending on intent, and includes an eval harness for answer quality.",
			linkText: "Visit project",
			link: "https://tally.wunderblu.com",
			tech: ["FastAPI", "Supabase", "pgvector", "LangGraph", "OpenAI", "React"],
			featured: true,
		},
		{
			title: "Moment",
			description:
				"React Native event discovery app with 600+ downloads — built the frontend and backend REST APIs connecting to a Neo4j graph database for social and event recommendations.",
			linkText: "View on App Store",
			link: "https://apps.apple.com/us/app/where2be-your-school-guide/id1671447709",
			tech: ["React Native", "Neo4j", "Node.js"],
		},
		{
			title: "Time Machine",
			description:
				"AI chatbot simulating historical conversations using LLM prompt engineering (LLaMA v3) and React.js frontend state management. Includes safeguards to reduce hallucinations.",
			linkText: "View on GitHub",
			link: "https://github.com/govgovnahr/TimeMachine",
			tech: ["React.js", "Python", "LLaMA v3"],
		},
	],

	work: [
		{
			company: "C3.ai",
			role: "Full-Stack Software Engineer",
			duration: "Sept 2024–Jan 2026",
			location: "Redwood City, CA",
			logo: "c3ai.png",
			bullets: [
				"Led technical design of Total Force Planning Process (TFPP) application, authoring technical specs, defining data models, and designing frontend architecture for a U.S. Marine Corps (USMC) personnel planning platform using React, TypeScript, and C3 Platform",
				"Owned end-to-end development of TFPP, leading a 3-engineer team from approved specs through production deployment, resulting in estimated annual cost savings of $200M",
				"Served as lead developer for USMC Personnel Forecasting Tool (PFT), designing extensible architecture and implementing scalable workflows for long-term development",
				"Designed a data aggregation pipeline compressing up to 72M personnel records to 5,000 planning-ready entries, enabling real-time forecasting at scale",
			],
		},
		{
			company: "Sony Interactive Entertainment",
			role: "Software Engineer",
			duration: "June 2023–May 2024",
			location: "San Francisco, CA",
			logo: "playstation.png",
			bullets: [
				"Owned AWS Lambda and Slack integration for an internal LLM-powered support chatbot, automating responses to engineering support requests and reducing interruptions by 25%",
				"Built and maintained CI/CD pipelines using Jenkins, integrating RBAC, Helm chart generation, and ServiceNow workflows, reducing deployment time by up to 30%",
				"Devised and built dynamic Helm chart generation from schema-driven configurations, standardizing Kubernetes deployments across teams",
				"Supported production systems as an on-call engineer, managing engineering support requests, Kubernetes clusters, ArgoCD deployments, and operational incidents",
			],
		},
		{
			company: "Sony Interactive Entertainment",
			role: "Software Engineer Intern",
			duration: "May 2022–Aug 2022",
			location: "San Francisco, CA",
			logo: "playstation.png",
			bullets: [
				"Built a monitoring system using Python for resource-intensive Kubernetes applications in production clusters",
				"Utilized Jenkins (Groovy) to create internal tooling that notifies senior engineers of failed Kubernetes deployments, improving time to resolve by 20%",
			],
		},
	],

	skills: [
		{ name: "Python", category: "Languages" },
		{ name: "TypeScript", category: "Languages" },
		{ name: "JavaScript", category: "Languages" },
		{ name: "SQL", category: "Languages" },
		{ name: "C++", category: "Languages" },
		{ name: "Groovy", category: "Languages" },
		{ name: "React", category: "Frameworks" },
		{ name: "React Native", category: "Frameworks" },
		{ name: "Node.js", category: "Frameworks" },
		{ name: "AWS", category: "Cloud" },
		{ name: "Kubernetes", category: "Cloud" },
		{ name: "Helm", category: "Cloud" },
		{ name: "Jenkins", category: "Cloud" },
		{ name: "ArgoCD", category: "Cloud" },
		{ name: "Prometheus", category: "Cloud" },
		{ name: "MongoDB", category: "Tools" },
		{ name: "Git", category: "Tools" },
		{ name: "Linux", category: "Tools" },
	],

	resume: {
		link: "/resume.pdf",
	},
};

export default INFO;
