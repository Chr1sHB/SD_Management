import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
             tlsAllowInvalidCertificates: true, 
        })
    } catch(error) {
        console.log(error)
    }
}

export default connectToDatabase