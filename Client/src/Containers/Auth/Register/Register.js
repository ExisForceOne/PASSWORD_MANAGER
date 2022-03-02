import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik'
import yupValidators from "../../../Helpers/yupValidators";

import Form from "../../../Components/Forms/Form/Form";
import { Input } from "../../../Components/Forms/Input/Input";
import LoadingSubmitBtn from "../../../Components/UI/Buttons/LoadingSubmitBtn/LoadingSubmitBtn";
import AuthLink from "../../../Components/Login&Register/AuthLink/Link";

function Register() {
    let navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
        },
        validationSchema: yupValidators.register,
        onSubmit: values => register(values)
    })




    function register(values){
        console.log(values)
        setLoading(true)
        setTimeout(()=>{
            navigate('/login')
        },1500)
    }

    return (
            <>
            <Form title='Register' onSubmit={formik.handleSubmit}>
            <Input
                label="Email:"
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email 
                    ? formik.errors.email
                    : null}
            />

            <Input
                label="Master Password:"
                id='password'
                name='password'
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password 
                    ? formik.errors.password
                    : null}
            />           
            
            <Input
                label="Repeat Master Password:"
                id='repeatPassword'
                name='repeatPassword'
                type='password'
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
                onBlur={formik.handleBlur}
                error={formik.touched.repeatPassword && formik.errors.repeatPassword 
                    ? formik.errors.repeatPassword
                    : null}
            />   
            <LoadingSubmitBtn loading={loading} text={'Register'} />
            </Form>

            <AuthLink 
            to={'/login'}
            msg={'Already have accout? Login here'}
            />

            </>

    );
  }
  
  export default Register;
  