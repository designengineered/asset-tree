export interface Brand {
	id: string;
	name: string;
	displayName: string;
	theme: BrandTheme;
	isActive: boolean;
	order: number;
	description?: string;
	createdAt: string;
	updatedAt: string;
}

export interface BrandTheme {
	primary: string;
	secondary: string;
	accent: string;
}

export interface LinkCategory {
	id: string;
	name: string;
	brandId: string;
	contentType: string;
	icon?: string;
	isActive: boolean;
	order: number;
	description?: string;
	createdAt: string;
	updatedAt: string;
}

export interface AssetLink {
	id: string;
	name: string;
	url: string;
	categoryId: string;
	linkType: 'imagery' | 'graphics' | 'printables' | 'labels' | 'documents' | 'shareable' | 'code';
	tags?: string[]
}
