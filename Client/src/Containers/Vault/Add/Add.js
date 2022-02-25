import Form from '../../../Components/Forms/Form/Form'
import { Input, Textarea } from '../../../Components/Forms/Input/Input'

export default function Add(props){

    return (
        <div style={{padding: '10px'}}>

            <Form title={'Add new key'}>
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
            
            <p style={{borderBottom: '1px dashed black', marginBottom: '5px'}}>Optional:</p>
            
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


            </Form>
        </div>
    )
}
