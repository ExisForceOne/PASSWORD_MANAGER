import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../../Contexts/AuthContext";
import SuccessMsgContext from '../../../Contexts/SuccessMsgContext'
import axios from "axios";
import { useFormik } from 'formik';

import FetchError from "../../../Components/FetchError/FetchError";
import Form from "../../../Components/Forms/Form/Form";
import { Input } from "../../../Components/Forms/Input/Input";
import LoadingSubmitBtn from "../../../Components/Buttons/LoadingSubmitBtn/LoadingSubmitBtn";
import AuthLink from "../../../Components/Login&Register/AuthLink/AuthLink";

function Login() {

    let navigate = useNavigate()
    const {setAuthUser} = useContext(AuthContext)
    const {setSuccessMsg} = useContext(SuccessMsgContext)

    const [loading, setLoading] = useState(false)
    const [errMessage, setErrMessage] = useState(null)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => login(values)
    })


    async function login(values){
        setLoading(true)

        try {
            const res = await axios.post('http://localhost:3001/users/login', values)
            setAuthUser(res.data.token)
            setSuccessMsg('Logged in successfully!')
            navigate('/vault')

          } catch (err) {
                formik.resetForm()
                setLoading(false)
                setErrMessage
                    (
                    err.response
                    ? err.response.data.message
                    : 'Something went wrong, please try again later!'
                    )
            }
    }


    return (
            <>
            {errMessage ? <FetchError message={errMessage} /> : null}
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
  