import * as yup from 'yup';

export const contactFormSchema = yup.object().shape({
   fullName: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, 'Only letters')
      .required('Please enter your Full Name')
      .min(3, 'minimum 3 letter')
      .max(30),
   email: yup
      .string()
      .email('Please enter a valid email address.')
      .required('Please write your email'),
   message: yup
      .string()
      .required('Please write your message')
      .min(50, 'minimum 50 symbol')
      .max(2000)
})