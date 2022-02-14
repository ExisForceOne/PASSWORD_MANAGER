import style from './Home.module.css'
import Bar from '../../Components/Home/Bar/Bar'
import { Link } from "react-router-dom";
import GrayBackground from '../../Components/Wrappers/GrayBackground/GrayBackground';

function Home(props){

    return (
        <GrayBackground>
            <div className={style.flex}>
                <Link to='login'className={style.bigBtn}>Login</Link>
                <Bar />
                <Link to='register'className={style.bigBtn}>Register</Link>
            </div>
        </GrayBackground>
    )
}

export default Home