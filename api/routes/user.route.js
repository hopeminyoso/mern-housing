import express from 'express';
import { test } from '../controllers/user.controller.js';
 

const router = express.Router();
router.get('/test', test); // Assigning the test function to the '/test' route

export default router;




