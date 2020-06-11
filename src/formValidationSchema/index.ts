import * as yup from 'yup';

export const SignupSchema = yup.object().shape({
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  username: yup.string().required('User name is required'),
  email: yup.string().email('Enter a valid email account').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password should be at least 6 characters')
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  termsAndCondition: yup
    .boolean()
    .oneOf([true], 'Please indicate that you accept terms and condition'),
});

export const LoginSchema = yup.object().shape({
  username: yup.string().required('User name is required'),
  password: yup.string().min(6, 'Password should be at least 6 characters'),
  rememberMe: yup.boolean().required(),
});