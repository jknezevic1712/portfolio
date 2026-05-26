interface TechStackBadgesProps {
	badges: readonly string[];
}

export const TechStackBadges = ({ badges }: TechStackBadgesProps) => {
	return badges.map((badge) => (
		<div
			key={badge}
			className="text-highlight font-semibold p-2 shadow-md rounded-lg text-xs 2xl:text-sm"
		>
			<span>{badge}</span>
		</div>
	));
};
