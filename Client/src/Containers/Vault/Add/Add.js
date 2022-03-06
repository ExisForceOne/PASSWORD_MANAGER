import style from './Add.module.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

import Form from '../../../Components/Forms/Form/Form'
import { Input, Textarea } from '../../../Components/Forms/Input/Input'
import SubmitAndCancelBtnContainer from '../../../Components/SubmitAndCancelBtnContainer/SubmitAndCancelBtnContainer'
import VisibleBtn from '../../../Components/Buttons/VisibleBtn/VisibleBtn'
import OpenGeneratorBtn from '../../../Components/Buttons/OpenGeneratorBtn/OpenGeneratorBtn'

import randomHEX from '../../../Helpers/randomHEX'
import PasswordGenerator from '../../PasswordGenerator/PasswordGenerator'




export default function Add(props){
    let navigate = useNavigate()

    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    const [generatorIsVisible, setGeneratorIsVisible] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: 'name',
            login: 'login',
            password: 'dupa',
            color: randomHEX(),
            url: 'google',
            desc: 'opis'
        },
        onSubmit: values => submitHandler(values),
    })

    function submitHandler(values){
        console.log(values)
    }

    useEffect(()=>{
        setTimeout(()=>{
            // console.log('zmiana nejma')
            // formik.setFieldValue("name", 'name po zmianie')
        },1500)
    }, [])

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



            <Input
                label={'Color:'}
                id={'color'}
                name={'color'}
                type={'color'}
                onChange={formik.handleChange}
                value={formik.values.color}
            />
            
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
