export interface Project {
	title: string;
	description: string;
	logo: string;
	linkText?: string;
	link: string;
}

export interface WorkExperience {
	company: string;
	role: string;
	duration: string;
	location: string;
	bullets: string[];
	logo: string;
}

export interface Skill {
	name: string;
	category: "Languages" | "Frameworks" | "Cloud" | "Tools";
}

export interface SeoEntry {
	page: string;
	description: string;
	keywords: string[];
}
