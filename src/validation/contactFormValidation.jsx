import * as yup from 'yup';

///Import Utils
import i18n from '@/utils/i18n';

export const contactFormSchema = yup.object().shape({
   fullName: yup
      .string()
      .matches(/^[\p{L} ]+$/u, () => i18n.t('contact.form.name.matchError'))
      .required(() => i18n.t('contact.form.name.requiredError'))
      .min(2, () => i18n.t('contact.form.name.minError'))
      .max(30),
   email: yup
      .string()
      .email(() => i18n.t('contact.form.email.emailError'))
      .required(() => i18n.t('contact.form.email.requiredError')),
   message: yup
      .string()
      .required(() => i18n.t('contact.form.message.requiredError'))
      .min(20, () => i18n.t('contact.form.message.minError'))
      .max(2000)
})