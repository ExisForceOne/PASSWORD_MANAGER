
import { useState } from 'react' 

import Form from '../../Components/Forms/Form/Form'
import FullScreenModal from '../../Layout/FullScreenModal/FullScreenModal'
import { Slider } from '../../Components/Forms/Input/Input'
import ColorPreview from '../../Components/ColorPicker/ColorPreview/ColorPreview'
import SubmitAndCancelBtnContainer from '../../Components/Buttons/SubmitAndCancelBtnContainer/SubmitAndCancelBtnContainer'


import getHslAttributes from '../../Helpers/getHslAttributes'


export default function ColorPicker(props) {
    const [h ,setH] = useState(getHslAttributes.hue(props.color))
    const [s, setS] = useState(getHslAttributes.saturation(props.color))
    const [l, setL] = useState(getHslAttributes.lightness(props.color))

    const hueGradient = `linear-gradient(to right, rgb(204,75,75),rgb(204,204,75),rgb(75,204,75),rgb(75,204,204),rgb(75,75,204),rgb(204,75,204),rgb(204,75,75))`
    const saturationGradient = `linear-gradient(to right, hsl(${h},0%,${l}%),hsl(${h},100%,${l}%))`
    const lightnessGradient = `linear-gradient(to right, hsl(${h},${s}%,0%),hsl(${h},${s}%,50%),hsl(${h},${s}%,100%))`



    const onSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(`hsl(${h},${s}%,${l}%)`)
        props.close()
    }

    return (
        <FullScreenModal title={'Color Picker'}>


            <ColorPreview color={`hsl(${h},${s}%,${l}%)`} />

            <Form onSubmit={(e)=>onSubmit(e)}>
                <Slider
                label='Hue'
                min='0'
                max='360'
                color={hueGradient}
                value={h}
                onChange={e=>setH(e.target.value)}
                />

                <Slider
                label='Saturation'
                min='0'
                max='100'
                color={saturationGradient}
                value={s}
                onChange={e=>setS(e.target.value)}
                />

                <Slider
                label='Lightness'
                min='0'
                max='100'
                color={lightnessGradient}
                value={l}
                onChange={e=>setL(e.target.value)}
                />
            

                <SubmitAndCancelBtnContainer 
                    backText={'Cancel'}
                    backOnClick={()=>{props.close()}}
                    submitText={'Use'}
                /> 
            </Form>
        </FullScreenModal>
    )
}