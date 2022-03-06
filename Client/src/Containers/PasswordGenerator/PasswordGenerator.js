import style from './PasswordGenerator.module.css'
import { useState, useRef, useEffect } from 'react'

import generatePassword from '../../Helpers/generatePassword'

import Form from '../../Components/Forms/Form/Form'
import { Checkbox, Slider } from '../../Components/Forms/Input/Input'
import PasswordContainer from '../../Components/PasswordGenerator/PasswordContainer/PasswordContainer'
import CheckboxContainer from '../../Components/PasswordGenerator/CheckboxContainer/CheckboxContainer'
import SubmitAndCancelBtnContainer from '../../Components/Buttons/SubmitAndCancelBtnContainer/SubmitAndCancelBtnContainer'
import GeneratePasswordBtn from '../../Components/Buttons/GeneratePasswordBtn/GeneratePasswordBtn'

export default function PasswordGenerator(props){

    const checkboxesRef = useRef()



    const [lenght, setLenght] = useState(32)
    const [includeChars, setIncludeChars] = useState({
        lower: true,
        upper: true,
        number: true,
        special: true,
    }) 
    const [password, setPassword] = useState( generatePassword(includeChars, lenght) )


    useEffect(()=>{
        const [...checkboxes] = checkboxesRef.current.querySelectorAll('div>input');

        const activeCheckboxes = checkboxes.filter(item => item.checked);
     
        if (activeCheckboxes.length === 1){
            activeCheckboxes[0].disabled = true;
        } else {
           activeCheckboxes.forEach(item => item.disabled=false);
        }

    }, [includeChars]) //alwaus one checkbox active

    const onSubmit = (e) => {
        e.preventDefault()
        
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

            <PasswordContainer>{password}</PasswordContainer>

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
                
                <CheckboxContainer ref={checkboxesRef}>

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

                </CheckboxContainer>


                <GeneratePasswordBtn 
                onClick={()=>{ 
                    setPassword(generatePassword(includeChars, lenght))
                 }} 
                />

                <SubmitAndCancelBtnContainer 
                backText={'Cancel'}
                backOnClick={()=>{props.close()}}
                submitText={'Use'}
                />

            </Form>

        </div>
    )
}