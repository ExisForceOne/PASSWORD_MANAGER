import style from './Home.module.css'

function Home(props){

    return (
        <div className={style.wrapper}>
            <div>Login</div>
            <span>or</span>
            <div>Register</div>
        </div>
    )
}

export default Home