import './animationTime.css'
import style from './CollapseWeaknessList.module.css'

import {  useState } from 'react'
import {Collapse} from 'react-collapse'
import { RiArrowDownSLine as ArrowDown, RiArrowUpSLine as ArrowUp  } from 'react-icons/ri'

export default function WeaknessList(props){

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className={style.container}>
            <button onClick={()=>setIsOpen(!isOpen)}>
                {isOpen
                ? <>Hide weakness <ArrowUp/> </>
                : <>Show weakness <ArrowDown/> </>
                }
                </button>
            <Collapse isOpened={isOpen}>
            <ul>
                {
                    props.weakness.map((x,index)=>
                        <li key={index}>{x}</li>
                        )
                }
            </ul>
            </Collapse>
        </div>
    )
}