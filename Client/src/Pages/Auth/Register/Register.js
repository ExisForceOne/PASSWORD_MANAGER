import Form from "../../../Components/Forms/Form/Form";
import { Input } from "../../../Components/Forms/Input/Input";
import LoadingSubmitBtn from "../../../Components/UI/LoadingSubmitBtn/LoadingSubmitBtn";
import AuthLink from "../../../Components/AuthLink/Link";

function Register() {
    return (
            <>
            <Form title='Register'>
            <Input
                label="Email:"
                id='email'
                name='email'
                type='email'
            />

            <Input
                label="Master Password:"
                id='password'
                name='password'
                type='password'
            />           
            
            <Input
                label="Repeat Master Password:"
                id='password'
                name='password'
                type='password'
            />   
            <LoadingSubmitBtn loading={false} text={'Register'} />
            </Form>

            <AuthLink 
            to={'/login'}
            msg={'Already have accout? Login here'}
            />

            </>

    );
  }
  
  export default Register;
  