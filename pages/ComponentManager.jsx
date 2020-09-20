export const ComponentOverview = ({ name = "" }) => (
	<div className="ComponentOverview">{name}</div>
);

export default ({ components = [] }) => {
	return (
		<div className="ComponentManager">
			{components.map((component_info) => (
				<ComponentOverview {...component_info} />
			))}
		</div>
	);
};
