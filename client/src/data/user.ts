import { Project, WorkExperience, Skill } from "../types";

interface Info {
	main: {
		title: string;
		name: string;
		email: string;
		logo: string;
	};
	socials: {
		github: string;
		linkedin: string;
	};
	homepage: {
		title: string;
		description: string;
	};
	about: {
		title: string;
		description: string;
	};
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
		name: "Govind N.",
		email: "govindnair28@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/govgovnahr",
		linkedin: "https://www.linkedin.com/in/govindnair2/",
	},

	homepage: {
		title: "Govind Nair | Full-Stack Software Engineer",
		description:
			"Welcome to my personal website! I'm a software engineer with a passion for writing efficient, scalable, and reliable code. I have professional and project experience across a variety of technologies and I'm always looking for a new challenge!",
	},

	about: {
		title: "I'm Govind. Nice to meet you!",
		description:
			"I'm a software engineer with a passion for writing efficient, scalable, and reliable code, and have professional and project experience across a variety of technologies. After graduating from the University of Illinois at Urbana-Champaign in May 2023 with a degree in Engineering Physics and a minor in Computer Science, I've worked at Sony Interactive Entertainment and C3.ai building full-stack applications, developer tooling, and cloud infrastructure. I'm always looking for a new challenge — feel free to explore some of my work here!",
	},

	projects: [
		{
			title: "Where2Be (Startup)",
			description:
				"UIUC-specific event recommendation app with 600+ student downloads. Built the frontend with React Native and backend REST APIs with Neo4j.",
			logo: "w2b.png",
			linkText: "View on App Store",
			link: "https://apps.apple.com/us/app/where2be-your-school-guide/id1671447709",
		},

		{
			title: "Time Machine",
			description:
				"AI chatbot simulating historical conversations using LLM prompt engineering (LLaMA v3) and React.js frontend state management. Includes safeguards to reduce hallucinations.",
			logo: "chatgpt.png",
			linkText: "View Project",
			link: "https://github.com/govgovnahr/TimeMachine",
		},
	],

	work: [
		{
			company: "C3.ai",
			role: "Full-Stack Software Engineer",
			duration: "Sept 2024 – Jan 2026",
			location: "Redwood City, CA",
			logo: "c3ai.png",
			bullets: [
				"Led technical design and architecture of Total Force Planning Process (TFPP) application, defining data models and frontend architecture for a U.S. Marine Corps personnel planning platform using React, TypeScript, and C3 Platform.",
				"Owned end-to-end development of TFPP, leading a 3-engineer team from approved specs through production deployment, resulting in estimated annual cost savings of $200M.",
				"Served as lead developer for USMC Personnel Forecasting Tool (PFT), owning architecture and implementation of scalable workflows for long-term development.",
				"Communicated with product managers, senior engineers, and stakeholders to translate client requirements into technical designs using Agile/Scrum and Jira.",
			],
		},
		{
			company: "Sony Interactive Entertainment",
			role: "Software Engineer",
			duration: "June 2023 – May 2024",
			location: "San Francisco, CA",
			logo: "playstation.png",
			bullets: [
				"Developed internal support chatbot leveraging AWS Lambda, Python, and LLaMA-based LLM backend, automating responses to engineering support requests and reducing interruptions by 25%.",
				"Built and maintained CI/CD pipelines using Jenkins, integrating RBAC, Helm chart generation, and ServiceNow workflows, reducing deployment time by up to 30%.",
				"Devised and constructed dynamic Helm chart generation from schema-driven configurations, standardizing Kubernetes deployments across teams.",
				"Supported production systems as an on-call engineer, managing Kubernetes clusters, ArgoCD deployments, and operational incidents.",
			],
		},
		{
			company: "Sony Interactive Entertainment",
			role: "Software Engineer Intern",
			duration: "May 2022 – Aug 2022",
			location: "San Francisco, CA",
			logo: "playstation.png",
			bullets: [
				"Built a monitoring system using Python for resource-intensive Kubernetes applications in production clusters.",
				"Utilized Jenkins (Groovy) to create internal tooling that notifies senior engineers of failed Kubernetes deployments, improving time to resolve by 20%.",
				"Assessed viability of open-source automation and alerting tools for use in production workflows.",
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
