import { Outlet } from 'react-router-dom'
import style from './AuthLayout.module.css'

function AuthLayout(props){

    return (
        <div className={style.container}>
            <h1 className={style.title}>Passwrod Menager</h1>
            <div className={style.content}>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout