import mongoose from "mongoose"

async function connectDatabase(){
    mongoose.connect('mongodb://localhost:27017/mydb');
    return mongoose.connection
}
export default connectDatabase