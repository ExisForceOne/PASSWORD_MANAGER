import { useState, useEffect,useContext } from 'react'
import axios from 'axios'

import AuthContext from '../../Contexts/AuthContext'


import Loading from '../../Components/Loading/Loading'
import SearchBar from '../../Components/Vault/SearchBar/SearchBar'
import KeysContainer from '../../Components/KeysContainer/KeysContainer'
import KeysItem from '../../Components/KeysItem/KeysItem'
import AddNewKeyBtn from '../../Components/Buttons/AddNewKeyBtn/AddNewKeyBtn'
import NoKeysInfo from '../../Components/Vault/NoKeysInfo/NoKeysInfo'
// import FetchError from '../../Components/FetchError/FetchError'


export default function Valut(props){
    const { authUser } = useContext(AuthContext)
    const [fetchedData, setFetchedData] = useState(null)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState('')

    async function fetchData(){
        const config = {
            headers: { Authorization: `Bearer ${authUser}` }
        }

        try {
            const res =  await axios.get('http://localhost:3001/keys', config)
            console.log(res.status)
            console.log(res.data)
            setFetchedData(res.data)
            setData(res.data)
        } catch(err){
            console.log(err.toJSON())
        }
        setIsLoading(false)
    }

    function filterData(term){
        const newData = fetchedData?.filter(x => x.name
            .toLowerCase()
            .includes(term.toLowerCase()))

            setData(newData)
    }
  
    useEffect(()=>{
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        filterData(term)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [term])


    if(isLoading) {
        return <Loading />
    }

    if(fetchedData.length === 0){
        return <NoKeysInfo/>
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
