import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';


dotenv.config(); // This loads the .env file into process.env

const app = express();

// Connecting to MongoDB using Mongoose and process.env
mongoose.connect(process.env.MONGODB_URI, {
 
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});


app.use('/api/users', userRoutes);