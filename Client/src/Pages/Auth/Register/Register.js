import Form from "../../../Components/Forms/Form/Form";
import { Input } from "../../../Components/Forms/Input/Input";
import LoadingSubmitBtn from "../../../Components/UI/LoadingSubmitBtn/LoadingSubmitBtn";
import AuthLink from "../../../Components/AuthLink/Link";
import { useFormik } from 'formik'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    let navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
        },
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
            />

            <Input
                label="Master Password:"
                id='password'
                name='password'
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
            />           
            
            <Input
                label="Repeat Master Password:"
                id='repeatPassword'
                name='repeatPassword'
                type='password'
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
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
  