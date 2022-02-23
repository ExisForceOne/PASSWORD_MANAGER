import { useState } from 'react'
import SearchBar from '../../../Components/SearchBar/SearchBar'
import PassContainer from '../../../Components/Vault/PassContainer/PassContainer'
import PassItem from '../../../Components/Vault/PassItem/PassItem'
import fakeData from '../../../fakeData'


export default function Home(props){
    const [data, setData] = useState(fakeData)

    return (
        <>
        <SearchBar />
        <h4>Your keys:</h4>
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
