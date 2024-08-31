const FieldError = ({ error }: { error?: string }) => {
	return error ? <p className="text-red-500 text-xs">{error}</p> : null;
};

export { FieldError };
