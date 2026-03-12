import React, { useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
	children: React.ReactNode;
	delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
	children,
	delay = 0,
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.08 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className="fade-in-section"
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? "translateY(0)" : "translateY(24px)",
				transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
			}}
		>
			{children}
		</div>
	);
};

export default FadeInSection;
