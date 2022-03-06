import style from './PasswordGenerator.module.css'
import { useState } from 'react'

import generatePassword from '../../Helpers/generatePassword'

import Form from '../../Components/Forms/Form/Form'
import { Checkbox, Slider } from '../../Components/Forms/Input/Input'
import BtnContainer from '../../Components/BtnContainer/BtnContainer'


export default function PasswordGenerator(props){

    const [lenght, setLenght] = useState(32)

    const [includeChars, setIncludeChars] = useState({
        lower: true,
        upper: true,
        number: true,
        special: true,
    }) 

    const [password, setPassword] = useState( generatePassword(includeChars, lenght) )


    const onSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(password)
        props.close()
    }

    const generate = () => { 
        setPassword(generatePassword(includeChars, lenght))
    }

    function checkboxHandler(e){
        const value = e.target.value
        const isChecked = e.target.checked

        const newState = {...includeChars, [value]: isChecked}
        setIncludeChars(newState)
    }


    return (
        <div className={style.container}>
            <h4>Generate Password</h4>

            <p className={style.password}>{password}</p>


            <Form onSubmit={(e)=>onSubmit(e)}>
                <Slider
                value={lenght}
                label='Characters'
                type='range'
                id='chars'
                step='1'
                min='4'
                max='32'
                onChange={e=>setLenght(e.target.value)}
                />
                
                <p style={{margin: '15px 0 5px'}}>Inlude:</p>
                <Checkbox
                label='Lowercase'
                id='lower'
                value='lower'
                onChange={(e)=>{checkboxHandler(e)}}
                checked={includeChars.lower}
                />
                
                <Checkbox
                label='Uppercase'
                id='upper'
                value='upper'
                onChange={(e)=>{checkboxHandler(e)}}
                checked={includeChars.upper}
                />
                
                <Checkbox
                label='Numbers'
                id='number'
                value='number'
                onChange={(e)=>{checkboxHandler(e)}}
                checked={includeChars.number}
                />

                <Checkbox
                label='Special Characters'
                id='special'
                value='special'
                onChange={(e)=>{checkboxHandler(e)}}
                checked={includeChars.special}
                />
                
                <button onClick={()=>{generate()}} type='button'>GENERATE</button>

                <BtnContainer 
                backText={'Cancel'}
                backOnClick={()=>{props.close()}}
                submitText={'Use'}
                />

            </Form>

        </div>
    )
}