import Header from "../../../Components/Details/Header/Header"
import { Login, Password, Url, Desc} from "../../../Components/Details/Section/Section"
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

        <Login
        value={data.login}
         />
        <Password
        value={data.password}
        />
        {
        data.url
        ?  <Url value={data.url} />
        : null
        }
        {
        data.desc
        ?  <Desc value={data.desc} />
        : null
        }
        </>
    )
}
