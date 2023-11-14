import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


dotenv.config(); // This loads the .env file into process.env

const app = express();

app.use(express.json());

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
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});