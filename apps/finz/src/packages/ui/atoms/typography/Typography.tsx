import { Variant } from '../../shared/models';
import { getColorVariant } from '../../shared/utils';

interface TypographyProps extends Omit<React.ComponentProps<'div'>, 'children'> {
	children: string;
	variant?: Variant;
}
const baseCommonClasses = 'font-sans';

const PageTitle = ({ children, variant = 'default', ...other }: TypographyProps) => (
	<div
		className={`${baseCommonClasses} ${getColorVariant(variant)} text-page-title font-bold leading-page-title`}
		{...other}
	>
		{children}
	</div>
);

const PageSubTitle = ({ children, variant = 'default', ...other }: TypographyProps) => (
	<div className={`${baseCommonClasses} ${getColorVariant(variant)} text-2xl font-bold leading-8`} {...other}>
		{children}
	</div>
);

const SectionTitle = ({ children, variant = 'default', ...other }: TypographyProps) => (
	<div className={`${baseCommonClasses} ${getColorVariant(variant)} text-lg font-bold leading-7`} {...other}>
		{children}
	</div>
);

const BodyRegular = ({ children, variant = 'default', ...other }: TypographyProps) => (
	<div className={`${baseCommonClasses} ${getColorVariant(variant)} text-sm font-normal leading-5`} {...other}>
		{children}
	</div>
);

const BodyBold = ({ children, variant = 'default', ...other }: TypographyProps) => (
	<div className={`${baseCommonClasses} ${getColorVariant(variant)} text-sm font-bold leading-5`} {...other}>
		{children}
	</div>
);

export { PageTitle, PageSubTitle, SectionTitle, BodyRegular, BodyBold };
