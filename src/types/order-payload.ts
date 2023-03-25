export type ProductInfo = {
	productId: string;
	count: number;
}

export type OrderPayload = {
	"userId": string,
  "locality": string,
  "street": string,
  "house": string,
  "apartment": string,
  "extra": string,
  "date": string,
  "time": string,
  "products": ProductInfo[]
}