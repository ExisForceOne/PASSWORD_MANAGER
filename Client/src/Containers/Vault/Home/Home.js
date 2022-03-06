import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Loading from '../../../Components/Loading/Loading'
import SearchBar from '../../../Components/SearchBar/SearchBar'
import PassContainer from '../../../Components/Vault/PassContainer/PassContainer'
import PassItem from '../../../Components/Vault/PassItem/PassItem'
import AddNewKeyBtn from '../../../Components/Buttons/AddNewKeyBtn/AddNewKeyBtn'
import fakeData from '../../../fakeData'


export default function Home(props){
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
        <>
        <AddNewKeyBtn />
        <SearchBar onSearch={setTerm} />
        <PassContainer 
            header={
                term
                ? `You have ${data.length} matches for "${term}" :`
                : `Your keys:`
            }
        >
            {
            data.map(x=>
                <Link key={x._id} to={`details`} >
                    <PassItem
                    name={x.name}
                    color={x.color}
                    fav={x.fav} 
                    />
                </Link>)
            }
        </PassContainer>
        </>
    )
}
