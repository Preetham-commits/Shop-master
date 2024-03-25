//Preetham Karra 301329279
// Importing necessary configurations for the database
import config from './config.js';

// Importing mongoose for MongoDB object modeling
import mongoose from 'mongoose';

const connectDB = async () => {
    // Connecting to MongoDB using the connection string from the config
    mongoose.connect(config.ATLASDB);

    // Creating a connection instance
    let mongodb = mongoose.connection;
  
    // Handling connection errors
    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
  
    // Logging successful database connection
    mongodb.once('open', () => {
        console.log("====> Connected to MongoDB.");
})
}



export default connectDB
