interface TypographyProps extends Omit<React.ComponentProps<'div'>, 'children'> {
	children: string;
}
const baseCommonClasses = 'font-sans text-gray-700';

const PageTitle = ({ children, ...other }: TypographyProps) => (
	<div className={`${baseCommonClasses} text-page-title font-bold leading-page-title`} {...other}>
		{children}
	</div>
);

const PageSubTitle = ({ children, ...other }: TypographyProps) => (
	<div className={`${baseCommonClasses} text-2xl font-bold leading-9`} {...other}>
		{children}
	</div>
);

const SectionTitle = ({ children, ...other }: TypographyProps) => (
	<div className={`${baseCommonClasses} text-lg font-bold leading-7`} {...other}>
		{children}
	</div>
);

const BodyRegular = ({ children, ...other }: TypographyProps) => (
	<div className={`${baseCommonClasses} text-sm font-normal leading-5`} {...other}>
		{children}
	</div>
);

const BodyBold = ({ children, ...other }: TypographyProps) => (
	<div className={`${baseCommonClasses} text-sm font-bold leading-5`} {...other}>
		{children}
	</div>
);

export { PageTitle, PageSubTitle, SectionTitle, BodyRegular, BodyBold };
