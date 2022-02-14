import style from './Home.module.css'
import Bar from '../../Components/Home/Bar/Bar'
import { Link } from "react-router-dom";

function Home(props){

    return (
        <div className={style.wrapper}>
            <Link to='login'className={style.bigBtn}>Login</Link>
            <Bar />
            <Link to='login'className={style.bigBtn}>Register</Link>
        </div>
    )
}

export default Home