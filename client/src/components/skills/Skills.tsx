import React from "react";
import { Skill } from "../../types";
import "./styles/skills.css";

interface SkillsProps {
	skills: Skill[];
}

const CATEGORY_ORDER: Skill["category"][] = [
	"Languages",
	"Frameworks",
	"Cloud",
	"Tools",
];

const Skills: React.FC<SkillsProps> = ({ skills }) => {
	const grouped = CATEGORY_ORDER.reduce<Record<string, Skill[]>>(
		(acc, cat) => {
			const items = skills.filter((s) => s.category === cat);
			if (items.length > 0) acc[cat] = items;
			return acc;
		},
		{}
	);

	return (
		<div className="skills-container">
			{Object.entries(grouped).map(([category, items]) => (
				<div className="skills-group" key={category}>
					<div className="skills-category-label">{category}</div>
					<div className="skills-chips">
						{items.map((skill) => (
							<span className="skill-chip" key={skill.name}>
								{skill.name}
							</span>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Skills;
