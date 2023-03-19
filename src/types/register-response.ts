import { Sex } from 'types'

export type RegisterResponse = {
	email: string;
	passwordHash: string;
	phone: string;
	birthDate: Date;
	surname: string;
	name: string;
	sex: Sex;
	region: string;
	locality: string;
	card: number;
}
