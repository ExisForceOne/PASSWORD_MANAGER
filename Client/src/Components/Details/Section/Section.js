import style from './Section.module.css'
import {
    BsFillPersonFill as PersonIcon,
    BsFillKeyFill as KeyIcon,
    BsGlobe as GlobeIcon
        } from 'react-icons/bs'

import { MdOutlineDescription as DescIcon } from "react-icons/md";

function Login(props){

    return (
        <>
        <div className={style.container}>
            {<PersonIcon />}
            <div className={style.dataContainer}>
                <p>Login:</p>
                <p>{props.value}</p>
            </div>
            {props.children}
        </div>
        </>
    )
}

function Password(props){

    return (
        <>
        <div className={style.container}>
            {<KeyIcon />}
            <div className={style.dataContainer}>
                <p>Password:</p>
                <p>{props.value}</p>
            </div>
            {props.children}
        </div>
        </>
    )
}

function Url(props){

    return (
        <>
        <div className={style.container}>
            {<GlobeIcon />}
            <div className={style.dataContainer}>
                <p>Website URL:</p>
                <p><a rel="noopener noreferrer" target="_blank" href={props.value}>{props.value}</a></p>
            </div>
            {props.children}
        </div>
        </>
    )
}

function Desc(props){

    return (
        <>
        <div className={style.container}>
            {<DescIcon />}
            <div className={style.dataContainer}>
                <p>Description:</p>
                <p>{props.value}</p>
            </div>
            {props.children}
        </div>
        </>
    )
}





export { Login, Password, Url, Desc }