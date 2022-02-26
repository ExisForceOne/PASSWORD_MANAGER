import style from './Add.module.css'


import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useEffect } from 'react'

import Form from '../../../Components/Forms/Form/Form'
import { Input, Textarea } from '../../../Components/Forms/Input/Input'
import BtnContainer from '../../../Components/UI/BtnContainer/BtnContainer'
import randomHEX from '../../../Helpers/randomHEX'


export default function Add(props){
    let navigate = useNavigate()


    const formik = useFormik({
        initialValues: {
            name: 'name',
            login: 'login',
            password: 'dupa',
            color: '#FF0000',
            url: 'google',
            desc: 'opis'
        },
        onSubmit: values => submitHandler(values)
    })


    function submitHandler(values){
        console.log(values)
    }

    useEffect(()=>{
        setTimeout(()=>{
            console.log(randomHEX())
        },1500)
    }, [])
    return (
        <div className={style.container}>

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

            <Input
                label={'Password:'}
                id={'password'}
                name={'password'}
                type={'password'}
                onChange={formik.handleChange}
                value={formik.values.password}
            />


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

            <BtnContainer
                backText={'Cancel'}
                backOnClick={()=>{navigate(-1)}}
                submitText={'Add'}
            />

            </Form>
        </div>
    )
}
