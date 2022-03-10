const getHslAttributes = {

    hue(color){
        return color.slice(4,-1).split(',')[0]
    },
    saturation(color){
        return color.slice(4,-1).split(',')[1].slice(0,-1)
    },
    lightning(color){
        return color.slice(4,-1).split(',')[2].slice(0,-1)
    }

}

export default getHslAttributes