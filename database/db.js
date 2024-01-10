import mongoose from 'mongoose'
const Connection = async(URL)=>{
    try {
        await mongoose.connect(URL)
        console.log('database connected successfully')
    } catch (error) {
        console.log(error)
    }
}
export default Connection;