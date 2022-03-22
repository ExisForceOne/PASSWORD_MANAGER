import { useState, useEffect } from 'react'

import Loading from '../../Components/Loading/Loading'
import SearchBar from '../../Components/SearchBar/SearchBar'
import KeysContainer from '../../Components/KeysContainer/KeysContainer'
import KeysItem from '../../Components/KeysItem/KeysItem'
import AddNewKeyBtn from '../../Components/Buttons/AddNewKeyBtn/AddNewKeyBtn'
import fakeData from '../../fakeData'


export default function Valut(props){
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState('')
    
    useEffect(()=>{
        setTimeout(()=>{
            setData(fakeData)
            setIsLoading(false)
        },500)
    },[])


    useEffect(()=>{

        const newData = fakeData.filter(x => x.name
            .toLowerCase()
            .includes(term.toLowerCase()))

        console.log(newData)
        setData(newData)
    }, [term])


    if(isLoading) {
        return <Loading />
    }

    return (
        <div>
        <AddNewKeyBtn />
        <SearchBar onSearch={setTerm} />
        <KeysContainer 
            header={
                term
                ? `You have ${data.length} matches for "${term}" :`
                : `Your keys:`
            }
        >
            {
            data.map(x=>
                    <KeysItem
                    key={x._id}
                    name={x.name}
                    color={x.color}
                    fav={x.fav} 
                    />
                )
            }
        </KeysContainer>
        </div>
    )
}
