import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../Components/Forms/Form/Form";
import { Input } from "../../../Components/Forms/Input/Input";
import LoadingSubmitBtn from "../../../Components/Buttons/LoadingSubmitBtn/LoadingSubmitBtn";
import AuthLink from "../../../Components/Login&Register/AuthLink/Link";
import { useFormik } from 'formik';

function Login() {
    let navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => login(values)
    })





    function login(values){
        console.log(values)
        setLoading(true)
        setTimeout(()=>{
            navigate('/vault')
        },1500)
    }


    return (
            <>
            <Form title='Login' onSubmit={formik.handleSubmit}>
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
            <LoadingSubmitBtn loading={loading} text={'Login'} />
            </Form>
            
            <AuthLink 
            to={'/register'}
            msg={'First time? Create account here'}
            />
            </>

    );
  }
  
  export default Login;
  