import {useEffect, useState, useContext } from 'react'
import axios from 'axios'

import AuthContext from '../../Contexts/AuthContext'

import Loading from '../../Components/Loading/Loading'
import Chart from '../../Components/Analysis/Chart/Chart'
import Menu from '../../Components/Analysis/Menu/Menu'
import Tab from '../../Components/Analysis/Tab/Tab'
import FetchError from '../../Components/FetchError/FetchError'


import getArraysLenghtFromObj from '../../Helpers/getArraysLenghtFromObj'
import classifieKeysStrength from '../../Features/classifieKeysStrength'


export default function Analysis(props){
    const { authUser } = useContext(AuthContext)
    const [analyzedKeys, setAnalyzedKeys] = useState(null)
    const [visibleTab, setVisibleTab] = useState('Weak')
    const [errMessage, setErrMessage] = useState(null)



    async function fetchData(){
        const config = {
            headers: { Authorization: `Bearer ${authUser}` }
        }

        try {
            const res =  await axios.get('http://localhost:3001/keys', config)
            const data = classifieKeysStrength(res.data)
            setAnalyzedKeys(data)
            return res.data
        } catch(err){
            console.log(err.toJSON())

            setErrMessage('Something went wrong, please try again later!')
        }
    }


    useEffect(()=>{
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(errMessage){
        return <div><FetchError message={errMessage} /></div>
    }

    if(!analyzedKeys) {
        return <Loading />
    }


    return (
        <div>
            <Chart 
                data={getArraysLenghtFromObj(analyzedKeys)}
                labels={Object.keys(analyzedKeys)}
            />


            <Menu data={Object.keys(analyzedKeys)} setVisibleTab={setVisibleTab} visibleTab={visibleTab} />


            <Tab 
                data={analyzedKeys[visibleTab]}
            />
        </div>
    )
}
