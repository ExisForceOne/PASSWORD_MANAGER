import * as Yup from 'yup'

const yupValidators = {
    register: Yup.object({
        email: Yup.string().email('Invalid email format').trim().required('Email required'),
        password: Yup.string().min(4, 'Password should have min. 4 characters').required('Password required'),
        repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must be the same').required('Repeat password')
    }),
}

export default yupValidators