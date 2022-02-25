import { useState } from "react"

import Header from "../../../Components/Details/Header/Header"
import { Login, Password, Url, Desc} from "../../../Components/Details/Section/Section"
import CopyBtn from '../../../Components/UI/CopyBtn/CopyBtn'
import VisibleBtn from "../../../Components/UI/visibleBtn/VisibleBtn"
import fakeData from '../../../fakeData'


export default function Details(props){
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)


    const data = fakeData[1]
    return (
        <>
        <Header
        color={data.color}
        name={data.name}
        fav={data.fav} />

        <Login value={data.login}>
            <CopyBtn value={data.login} />
        </Login>
        
        <Password 
         value={
            passwordIsVisible
            ? data.password
            : '********'
            }
        >
            <VisibleBtn state={{passwordIsVisible, setPasswordIsVisible}} />
            <CopyBtn value={data.password} />
        </Password>

        {
        data.url
        ?  <Url value={data.url} />
        : null
        }

        {
        data.desc
        ?  <Desc value={data.desc} />
        : null
        }
        </>
    )
}
