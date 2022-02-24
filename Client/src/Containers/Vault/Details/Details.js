import Header from "../../../Components/Details/Header/Header"
import fakeData from '../../../fakeData'

export default function Details(props){

    const data = fakeData[0]
    console.log(data)
    return (
        <>
        <Header
        color={data.color}
        name={data.name}
        fav={data.fav} />
        
        </>
    )
}
