import style from './Home.module.css'
import Bar from '../../Components/Home/Bar/Bar'


function Home(props){

    return (
        <div className={style.wrapper}>
            <button className={style.bigBtn}>Login</button>
            <Bar />
            <button className={style.bigBtn}>Register</button>
        </div>
    )
}

export default Home