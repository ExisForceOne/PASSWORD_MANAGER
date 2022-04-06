import { Outlet } from 'react-router-dom'
import style from './LoginAndRegisterLayout.module.css'

function LoginAndRegisterLayout(props){

    return (
        <div className={style.container}>
            <h1 className={style.title}>Password Menager</h1>
            <div className={style.content}>
                <Outlet />
            </div>
        </div>
    )
}

export default LoginAndRegisterLayout