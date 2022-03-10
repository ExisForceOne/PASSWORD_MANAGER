import style from './Add.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

import Form from '../../../Components/Forms/Form/Form'
import { Input, Textarea } from '../../../Components/Forms/Input/Input'
import SubmitAndCancelBtnContainer from '../../../Components/Buttons/SubmitAndCancelBtnContainer/SubmitAndCancelBtnContainer'
import VisibleBtn from '../../../Components/Buttons/VisibleBtn/VisibleBtn'
import OpenGeneratorBtn from '../../../Components/Buttons/OpenGeneratorBtn/OpenGeneratorBtn'
import OpenColorPickerBtn from '../../../Components/Buttons/OpenColorPickerBtn/OpenColorPickerBtn'

import randomHSL from '../../../Helpers/randomHSL'
import PasswordGenerator from '../../PasswordGenerator/PasswordGenerator'
import ColorPicker from '../../ColorPicker/ColorPicker'




export default function Add(props){
    let navigate = useNavigate()

    //one state?
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    const [generatorIsVisible, setGeneratorIsVisible] = useState(false)
    const [colorPickerIsVisible, setColorPickerIsVisible] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: 'name',
            login: 'login',
            password: 'dupa',
            color: randomHSL(),
            url: 'google',
            desc: 'opis'
        },
        onSubmit: values => submitHandler(values),
    })

    function submitHandler(values){
        console.log(values)
    }

    return (
        <div className={style.container}>

            {
                generatorIsVisible
                ?   <PasswordGenerator 
                        close={()=>setGeneratorIsVisible(false)}
                        onSubmit={(value)=>formik.setFieldValue("password", value)}
                    />
                : null
            }            

            {
                colorPickerIsVisible
                ?   <ColorPicker 
                        color={formik.values.color}
                        close={()=>setColorPickerIsVisible(false)}
                        onSubmit={(value)=>formik.setFieldValue("color", value)}
                    />
                : null
            }        

            <Form title={'Add new key'} onSubmit={formik.handleSubmit}>

                <p className={style.infoBar}>Required:</p>

                <Input
                    label={'Name:'}
                    id={'name'}
                    name={'name'}
                    type={'text'}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <Input
                    label={'Login:'}
                    id={'login'}
                    name={'login'}
                    type={'text'}
                    onChange={formik.handleChange}
                    value={formik.values.login}
                />

                <div className={style.passContainer}>
                    <Input
                        label={'Password:'}
                        id={'password'}
                        name={'password'}
                        type={
                                passwordIsVisible
                                ? 'text'
                                : 'password'
                            }
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <VisibleBtn state={{passwordIsVisible, setPasswordIsVisible}} />
                    <OpenGeneratorBtn onClick={()=>setGeneratorIsVisible(true)} />
                </div>


                <p>Color:</p>
                <OpenColorPickerBtn color={formik.values.color} onClick={()=>setColorPickerIsVisible(true)} />

                
                <p className={style.infoBar}>Optional:</p>
                
                <Input
                    label={'Website URL:'}
                    id={'ulr'}
                    name={'url'}
                    type={'text'}
                    onChange={formik.handleChange}
                    value={formik.values.url}
                />

                <Textarea
                    label={'Description:'}
                    id={'desc'}
                    name={'desc'}
                    onChange={formik.handleChange}
                    value={formik.values.desc}
                />

                <SubmitAndCancelBtnContainer
                    backText={'Cancel'}
                    backOnClick={()=>{navigate(-1)}}
                    submitText={'Add'}
                />

            </Form>
        </div>
    )
}
