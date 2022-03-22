import {useEffect, useState } from 'react'

import fakeData from '../../fakeData'
import Loading from '../../Components/Loading/Loading'
import Chart from '../../Components/Analysis/Chart/Chart'
import Menu from '../../Components/Analysis/Menu/Menu'
import Tab from '../../Components/Analysis/Tab/Tab'


import getArraysLenghtFromObj from '../../Helpers/getArraysLenghtFromObj'
import classifieKeysStrength from '../../Features/classifieKeysStrength'


export default function Analysis(props){

    const [analyzedKeys, setAnalyzedKeys] = useState(null)
    const [visibleTab, setVisibleTab] = useState('Weak')



    useEffect(()=>{


        const data = classifieKeysStrength(fakeData)
        setAnalyzedKeys(data)





        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



    if(!analyzedKeys) {
        return <div><Loading /></div>
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
