import mongoose from 'mongoose'
import validators from '../validators.js'
import bcrypt from 'bcrypt'


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        unique: true,
        validate: [validators.validateEmail,'Invalid mail']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [4, 'Name must have at least 4 characters'],
    }
})

userSchema.pre("save", async function(next){
    if (!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next();
});


userSchema.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password, this.password);
}


const User = mongoose.model('User',userSchema)

export default User