type SearchItem = {
	"id": string;
	"title": string;
	"slug": string;
}

export type SearchResults = {
	products: SearchItem[];
	categories: SearchItem[];
}