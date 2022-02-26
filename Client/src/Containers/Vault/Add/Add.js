import style from './Add.module.css'

import Form from '../../../Components/Forms/Form/Form'
import { Input, Textarea } from '../../../Components/Forms/Input/Input'
import BtnContainer from '../../../Components/UI/BtnContainer/BtnContainer'
import { useNavigate } from 'react-router-dom'

export default function Add(props){
    let navigate = useNavigate()
    return (
        <div className={style.container}>

            <Form title={'Add new key'}>

            <p className={style.infoBar}>Required:</p>

            <Input
                label={'Name:'}
                id={'name'}
                name={'name'}
                type={'text'}
            />

            <Input
                label={'Login:'}
                id={'login'}
                name={'login'}
                type={'text'}
            />

            <Input
                label={'Password:'}
                id={'password'}
                name={'password'}
                type={'password'}
            />


            <Input
                label={'Color:'}
                id={'color'}
                name={'color'}
                type={'color'}
            />
            
            <p className={style.infoBar}>Optional:</p>
            
            <Input
                label={'Website URL:'}
                id={'ulr'}
                name={'url'}
                type={'text'}
            />

            <Textarea
                label={'Description:'}
                id={'desc'}
                name={'desc'}
                type={'desc'}
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
