import style from './ProtectedDashboardLayout.module.css'

import { useContext } from "react"
import { Outlet, Navigate } from 'react-router-dom'
import AuthContext from '../../Contexts/AuthContext'


import Footer from '../../Components/Footer/Footer'
import Menu from '../../Components/Menu/Menu'

function ProtectedDashboardLayout(props) {
    const { authUser } = useContext(AuthContext)

    return (
        <>
            {authUser
            ?  <div className={style.container}>
                    <Menu />
                    <Outlet />
                    <Footer />
                </div>
            : <Navigate to="/login" />

            }
        </>

    )
}

export default ProtectedDashboardLayout