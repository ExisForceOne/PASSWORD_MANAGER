import { useState, useEffect,useContext } from 'react'
import api from '../../Api/api'

import AuthContext from '../../Contexts/AuthContext'


import Loading from '../../Components/Loading/Loading'
import SearchBar from '../../Components/Vault/SearchBar/SearchBar'
import KeysContainer from '../../Components/KeysContainer/KeysContainer'
import KeysItem from '../../Components/KeysItem/KeysItem'
import AddNewKeyBtn from '../../Components/Buttons/AddNewKeyBtn/AddNewKeyBtn'
import NoKeysInfo from '../../Components/Vault/NoKeysInfo/NoKeysInfo'
import FetchError from '../../Components/FetchError/FetchError'


export default function Valut(props){
    const { authUser } = useContext(AuthContext)
    const [fetchedData, setFetchedData] = useState(null)
    const [data, setData] = useState(null)
    const [term, setTerm] = useState('')
    const [errMessage, setErrMessage] = useState(null)

    async function fetchData(){
        const config = {
            headers: { Authorization: `Bearer ${authUser}` }
        }

        try {
            const res =  await api.get('/keys', config)
            setFetchedData(res.data)
            setData(res.data)
        } catch(err){
            console.log(err.toJSON())

            setErrMessage('Something went wrong, please try again later!')
        }
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


    
    if(errMessage){
        return <div><FetchError message={errMessage} /></div>
    }
    
    if(!data) {
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
            data.map(item=>
                    <KeysItem
                    key={item._id}
                    {...item}
                    />
                )
            }
        </KeysContainer>
        </div>
    )
}
