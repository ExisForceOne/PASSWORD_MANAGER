import style from './NotFound.module.css'
import { Link } from 'react-router-dom';

export default function NotFound(props){

    return (
        <div className={style.container}>
            <p>404 not found (╯°□°）╯︵ ┻━┻ </p>
            <Link to='/vault'><button>Take me home</button></Link>
        </div>
    )
}