import * as yup from 'yup';


export const contactFormSchema = yup.object().shape({
   fullName: yup
      .string()
      .matches(/^[\p{L} ]+$/u, 'Только буквы')
      .required('Пожалуйста представьтесь')
      .min(2, 'Минимум 2 буквы')
      .max(30),
   email: yup
      .string()
      .email('Пожалуйста проверьте правильное написание почты')
      .required('Пожалуйста укажите почту'),
   message: yup
      .string()
      .required('Пожалуйста напишите ваше обращение')
      .min(20, 'Минимум 20 символов')
      .max(2000)
})