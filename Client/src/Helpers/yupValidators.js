import * as Yup from 'yup'

const yupValidators = {
    register: Yup.object({
        email: Yup.string().email('Invalid email format').trim().required('Email required'),
        password: Yup.string()
                    .min(10, 'Should have min. 10 characters')
                    .matches(/^(?=.*[a-z])/, 'Must contain at least one lowercase character')
                    .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
                    .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
                    .matches(/^(?=.*[@$!%*,.?&])/, 'Must contain at least one special character')
                    .required('Password required'),
        repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must be the same').required('Repeat password')
    }),
    addAndEdit: Yup.object({
        name: Yup.string().trim().max(24, 'Name can have max 24 characters').required('Name is required'),
        login: Yup.string().trim().required('Login is required'),
        password: Yup.string().trim().required('Password is required'),
    })
}

export default yupValidators