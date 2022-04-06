import style from './ProtectedDashboardLayout.module.css'

import { useContext } from "react"
import { Outlet, Navigate } from 'react-router-dom'
import AuthContext from '../../Contexts/AuthContext'

import Menu from '../../Components/Menu/Menu'
import Logout from '../../Components/Logout/Logout'

function ProtectedDashboardLayout(props) {
    const { authUser } = useContext(AuthContext)

    return (
        <>
            {authUser
            ?  <div className={style.container}>
                    <Menu />
                    <Outlet />
                    <Logout />
                </div>
            : <Navigate to="/login" />

            }
        </>

    )
}

export default ProtectedDashboardLayout