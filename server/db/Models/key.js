import mongoose from 'mongoose'
import validators from '../validators'

const keySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        max: (24, 'Name can have max 24 characters'),
    },
    login: {
        type: String,
        trim: true,
        required: [true, 'Login is required'],
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required'],
    },
    color: {
        type: String,
        required: [true, 'Color is required'],
        validate: [validators.validateHSL,'Color do not match hsl syntax'],
    },
    url: {
        type: String,
        default: '',
    },
    desc: {
        type: String,
        default: '',
    },
    fav: {
        type: Boolean,
        default: false,
    }
    //authorID

})


const Key = mongoose.model('Key',keySchema)

export default Key