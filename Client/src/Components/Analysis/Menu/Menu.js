import style from './Menu.module.css'

export default function Menu(props){


    function toogleActiveStyle(item){
       return item === props.visibleTab ? style.active : style.unActive
    }

    function onClickHandler(e){
        const activeBtn = e.target
        props.setVisibleTab(activeBtn.dataset.rating)
    }

    return (
        <ul className={style.menu}>
            {
                props.data.map((item,index)=>
                <li className={style.menuItem} key={index}>

                    <button
                    data-rating={item}
                    className={toogleActiveStyle(item)}
                    onClick={onClickHandler}            
                    >
                        
                    {item}
                    </button>

                </li>
                )
            }
        </ul>
    )
}