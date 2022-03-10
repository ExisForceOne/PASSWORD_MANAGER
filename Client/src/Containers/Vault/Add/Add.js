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

    const [isVisible, setIsVisible] = useState({
        password: false,
        generator: false,
        colorPicker: false,
    })
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)


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
                isVisible.generator
                ?   <PasswordGenerator 
                        close={()=>setIsVisible({...isVisible, generator: false})}
                        onSubmit={(value)=>formik.setFieldValue("password", value)}
                    />
                : null
            }            

            {
                isVisible.colorPicker
                ?   <ColorPicker 
                        color={formik.values.color}
                        close={()=>setIsVisible({...isVisible, colorPicker: false})}
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
                    <div className={style.btnContainer}>
                        <VisibleBtn state={{passwordIsVisible, setPasswordIsVisible}} />
                        <OpenGeneratorBtn onClick={()=>setIsVisible({...isVisible, generator: true})} />
                    </div>
                </div>


                <p>Color:</p>
                <OpenColorPickerBtn color={formik.values.color} onClick={()=>setIsVisible({...isVisible, colorPicker: true})} />

                
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
