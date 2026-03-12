import React from "react";
import { WorkExperience } from "../../types";
import "./styles/workTimeline.css";

interface WorkTimelineProps {
	work: WorkExperience[];
}

function highlightMetrics(text: string): React.ReactNode {
	const pattern = /(\$[\d,.]+[MBK]?|\d+%|\d+\s*engineers?)/g;
	const parts = text.split(pattern);
	const metricPattern = /^(\$[\d,.]+[MBK]?|\d+%|\d+\s*engineers?)$/;
	return parts.map((part, i) =>
		metricPattern.test(part) ? (
			<span className="work-metric" key={i}>{part}</span>
		) : (
			part
		)
	);
}

const WorkTimeline: React.FC<WorkTimelineProps> = ({ work }) => {
	return (
		<div className="work-timeline">
			{work.map((entry, index) => (
				<div className="work-entry" key={index}>
					<div className="work-entry-accent" />
					<div className="work-entry-content">
						<div className="work-entry-header">
							<div className="work-logo">
								<img src={entry.logo} alt={entry.company} />
							</div>
							<div className="work-meta">
								<div className="work-role">{entry.role}</div>
								<div className="work-company">
									{entry.company}
								</div>
								<div className="work-duration-location">
									<span className="work-duration">
										{entry.duration}
									</span>
									<span className="work-location-sep">·</span>
									<span className="work-location">
										{entry.location}
									</span>
								</div>
							</div>
						</div>
						<ul className="work-bullets">
							{entry.bullets.map((bullet, i) => (
								<li key={i}>{highlightMetrics(bullet)}</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default WorkTimeline;
