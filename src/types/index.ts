//core types
export interface Brand {
	id: string;
	name: string;
	displayName: string;
	logo: string;
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
	icon?: string;
	isActive: boolean;
	order: number;
	description?: string;
	createdAt: string;
	updatedAt: string;
}

export interface AssetNode {
	id: string;
	name: string;
	url: string;
	categoryId: string; 		// links with LinkCategory
	nodeType: 'imagery' | 'graphics' | 'printables' | 'labels' | 'documents' | 'shareable' | 'code';
	tags?: string[]
	icon?: string; 			// icons will be based on nodeType
	order: number;
	createdAt: string;
	updatedAt: string;
}

//form types (maybe move these out in the future)

export interface BrandFormData {
	name: string;
	displayName: string;
	logo: string;
	theme: BrandTheme;
	description?: string;
	isActive: boolean;
	order: number;
}

export interface CategoryFormData {
	name: string;
	brandId: string;
}
//api response types
