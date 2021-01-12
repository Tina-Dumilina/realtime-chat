export const validate = (values) => {
  const rules = {
    email: () => {
      if (!values.email) {
        errors.email = 'Введите e-mail'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неверный e-mail'
      }
    },
    username: () => {
      if (!values.username) {
        errors.username = 'Введите имя'
      }
    },
    password: () => {
      if (!values.password) {
        errors.password = 'Введите пароль'
      } else if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(values.password)) {
        errors.password =
          'Пароль должен содержать минимум 6 символов, хотя бы одну заглавную букву и хотя бы одну строчную букву'
      }
    },
    confirmation: () => {
      if (!values.confirmation) {
        errors.confirmation = 'Подтвердите пароль'
      } else if (values.confirmation !== values.password) {
        errors.confirmation = 'Пароли не совпадают'
      }
    },
  }

  const errors = {}
  Object.keys(values).forEach((key) => rules[key] && rules[key]())
  return errors
}
