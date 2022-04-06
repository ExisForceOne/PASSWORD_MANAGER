import { useContext, useState, useEffect } from 'react'
import SuccessMsgContext from '../../Contexts/SuccessMsgContext'

function SuccessInfo(props){

    const moveTime = 1000
    const showTime = 2000

    const [y, setY] = useState('-100%')
    const {successMsg, setSuccessMsg} = useContext(SuccessMsgContext)

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '30px',
        transition: `${moveTime/1000}s`,
        transform: `translateY(${y})`,
        color: 'white',
        backgroundColor: 'rgb(73, 134, 12)',
        textAlign: 'center',
        zIndex: 99,
    }


    const show = () => {
        setY('0%')
        setTimeout(()=>{
            setY('-100%')
        },showTime)
        
        setTimeout(()=>{
            setSuccessMsg('')
        },showTime+moveTime)
    }

    const reset = () => setY('-100%')
    useEffect(()=>{
        if(successMsg) {
            show()
        } else {
            reset()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [successMsg])

    return (
        <div style={styles}>
            <p>{successMsg}</p>
        </div>
    )
}

export default SuccessInfo