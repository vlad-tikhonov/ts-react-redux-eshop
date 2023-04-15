export const REGISTER_SUCCESS = "Регистрация прошла успешно. Выполните вход"

export const FORM_FIELDS = {
	birth: {
    requiredMessage: "Введите дату рождения",
		validateMessage: "Неверный формат даты"
  },

  sex: {
    requiredMessage: "Выберите пол",
  },

	locality: {
    requiredMessage: "Выберите населенный пункт",
  },

	region: {
    requiredMessage: "Выберите регион",
  },

	email: {
    requiredMessage: "Введите email",
  },

	surname: {
    requiredMessage: "Введите фамилию",
	},

	name: {
    requiredMessage: "Введите имя",
  },

	password: {
    requiredMessage: "Введите пароль",
		minLengthMessage: "Минимальная длинна пароля 4 символа"
  },

	confirm: {
    requiredMessage: "Введите пароль",
		validateMessage: "Пароли не совпадают"
  },
}