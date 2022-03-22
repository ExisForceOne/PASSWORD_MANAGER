import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Header from "../../Components/Details/Header/Header"
import { Login, Password, Url, Desc} from "../../Components/Details/Section/Section"
import BackBtn from "../../Components/Buttons/BackBtn/BackBtn"
import CopyBtn from '../../Components/Buttons/CopyBtn/CopyBtn'
import VisibleBtn from "../../Components/Buttons/VisibleBtn/VisibleBtn"
import fakeData from '../../fakeData'


export default function Details(props){
    let navigate = useNavigate()
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)




    const data = fakeData[1]
    return (
        <div>
            <Header
            color={data.color}
            name={data.name}
            fav={data.fav} />

            <BackBtn
            onClick={()=>{navigate(-1)}}
            text={'back'} 
            />

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
        </div>
    )
}