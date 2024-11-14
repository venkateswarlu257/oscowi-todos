import mongoose from 'mongoose';

// dotenv.config();
const DBconnection = () => {
    mongoose.connect("mongodb://localhost:27017/todos")
    .then(() => console.log('DB connection established'))
    .catch(err => console.error('DB connection error:', err));
}


export default DBconnection