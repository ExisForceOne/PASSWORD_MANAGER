import style from './Logout.module.css'

import { useContext } from 'react'
import AuthContext from '../../Contexts/AuthContext'
import SuccessMsgContext from '../../Contexts/SuccessMsgContext'

import {BiLogOutCircle as LogoutIcon } from 'react-icons/bi'


export default function Logout(props){
    const {setAuthUser} = useContext(AuthContext)
    const {setSuccessMsg} = useContext(SuccessMsgContext)
    

    function logout(){
        setAuthUser(null)
        setSuccessMsg('Logged out successfully!')
    }

    return (
        <button onClick={()=>{logout()}} className={style.btn}>Logout <LogoutIcon className={style.icon} /></button>
    )

}