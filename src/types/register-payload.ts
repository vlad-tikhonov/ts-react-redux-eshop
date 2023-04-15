import {Sex} from 'types'

export type RegisterPayload = {
	login: string;
	password:	string;
	birthDate: string;
	name: string;
	surname: string;
	sex: Sex;
	region: string;
	locality: string;
	phone?: string;
	card?: string;
}