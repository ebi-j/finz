export const VariantList = ['default', 'primary', 'secondary', 'text', 'warn', 'disabled'] as const;
export type Variant = (typeof VariantList)[number];

export const SizeList = ['xl', 'l', 'm', 's', 'xs'] as const;
export type Size = (typeof SizeList)[number];
