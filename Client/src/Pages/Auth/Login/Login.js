import Form from "../../../Components/Forms/Form/Form";
import { Input } from "../../../Components/Forms/Input/Input";
import LoadingSubmitBtn from "../../../Components/UI/LoadingSubmitBtn/LoadingSubmitBtn";
import AuthLink from "../../../Components/AuthLink/Link";

function Login() {
    return (
            <>
            <Form title='Login'>
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
            <LoadingSubmitBtn loading={false} text={'Login'} />
            </Form>
            
            <AuthLink 
            to={'/register'}
            msg={'First time? Create account here'}
            />
            </>

    );
  }
  
  export default Login;
  