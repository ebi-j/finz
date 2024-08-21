interface PropertyProps {
	name: string;
};

const Property = ({ name }: PropertyProps) => <div>{name}</div>;

export { Property };