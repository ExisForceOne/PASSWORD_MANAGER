import { useState, useEffect } from 'react'
import SearchBar from '../../../Components/SearchBar/SearchBar'
import PassContainer from '../../../Components/Vault/PassContainer/PassContainer'
import PassItem from '../../../Components/Vault/PassItem/PassItem'
import fakeData from '../../../fakeData'


export default function Home(props){
    const [data, setData] = useState(fakeData)
    const [term, setTerm] = useState('')
    
    useEffect(()=>{
        //tutaj pobieramy dane z bakendu
    },[])


    useEffect(()=>{

        const newData = fakeData.filter(x => x.name
            .toLowerCase()
            .includes(term.toLowerCase()))

        console.log(newData)
        setData(newData)
    }, [term])


    return (
        <>
        <SearchBar onSearch={setTerm} />
        <PassContainer >
            {
            data.map(x=>
                <PassItem
                name={x.name}
                color={x.color}
                fav={x.fav}
                key={x._id}
                />)
            }
        </PassContainer>
        </>
    )
}
