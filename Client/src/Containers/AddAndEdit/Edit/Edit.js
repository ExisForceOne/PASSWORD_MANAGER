import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"

import axios from 'axios'
import AuthContext from '../../../Contexts/AuthContext'

import SharedForm from "../SharedForm/SharedForm"
import Loading from "../../../Components/Loading/Loading"
import FetchError from "../../../Components/FetchError/FetchError"

export default function Edit(props){
    let {id} = useParams()
    const { authUser } = useContext(AuthContext)

    const [data, setData] = useState(null)
    const [errMessage, setErrMessage] = useState(null)


    async function fetchData(){
        const config = {
            headers: { Authorization: `Bearer ${authUser}` }
        }

        try {
            const res =  await axios.get(`http://localhost:3001/keys/${id}`, config)
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

    useEffect(()=>{
        fetchData()
    },[])

    if(errMessage){
        return <div><FetchError message={errMessage} /></div>
    }

    if(!data) return <Loading/>


    return (
        <SharedForm data={data} endpoint={`edit/${data._id}`}/>
    )
}