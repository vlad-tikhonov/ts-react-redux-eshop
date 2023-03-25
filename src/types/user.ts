import { Sex } from "types";

export type User = {
	id: string;
	email: string;
	name: string;
	surname: string;
	birthDate: string;
	sex: Sex;
	region: string;
	locality: string;
	card: number;
	phone: string;
}