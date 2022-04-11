import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"

import api from "../../Api"
import AuthContext from '../../Contexts/AuthContext'
import SuccessMsgContext from '../../Contexts/SuccessMsgContext'

import Header from "../../Components/Details/Header/Header"
import { Login, Password, Url, Desc} from "../../Components/Details/Section/Section"
import BackBtn from "../../Components/Buttons/BackBtn/BackBtn"
import CopyBtn from '../../Components/Buttons/CopyBtn/CopyBtn'
import VisibleBtn from "../../Components/Buttons/VisibleBtn/VisibleBtn"
import FetchError from '../../Components/FetchError/FetchError'
import EditBtn from "../../Components/Buttons/EditBtn/EditBtn"
import DeleteBtn from "../../Components/Buttons/DeleteBtn/DeleteBtn"

import Loading from '../../Components/Loading/Loading'


export default function Details(props){
    let params = useParams()
    let navigate = useNavigate()
    const { authUser } = useContext(AuthContext)
    const {setSuccessMsg} = useContext(SuccessMsgContext)

    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    const [data, setData] = useState(null)
    const [errMessage, setErrMessage] = useState(null)


    async function fetchData(){
        const config = {
            headers: { Authorization: `Bearer ${authUser}` }
        }

        try {
            const res =  await api.get(`/keys/${params.id}`, config)
            setData(res.data)
        } catch(err){
            console.log(err.toJSON())

            setErrMessage
            (
            err.response
            ? err.response.data.message
            : 'Something went wrong, please try again later!'
            )
        }
    }

    async function deleteKey(){

        if (!window.confirm("Are you sure you want to delete this key?")) return false

        const config = {
            headers: { Authorization: `Bearer ${authUser}` }
        }

        try {
            await api.delete(`/keys/${params.id}`, config)
            navigate(-1)
            setSuccessMsg('Key deleted!')
        } catch(err){
            console.log(err.toJSON())

            setErrMessage
            (
            err.response
            ? err.response.data.message
            : 'Something went wrong, please try again later!'
            )
        }
    }



    useEffect(()=>{
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(errMessage){
        return <div><FetchError message={errMessage} /></div>
    }

    if(!data) return <Loading/>

    return (
        <div>
            <Header
            color={data.color}
            name={data.name}
            fav={data.fav}>

                <Link to={`/edit/${data._id}`}><EditBtn /></Link>
                <DeleteBtn onClick={()=>{deleteKey()}}/>

            </Header>

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
