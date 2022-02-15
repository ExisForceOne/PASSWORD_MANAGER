import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props){

    let navigate = useNavigate()

    useEffect(()=>{
        navigate('/login')
    })

    return null
}