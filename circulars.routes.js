import express from 'express';
import { getCirculars } from '../controllers/circulars.controller.js';

const router = express.Router();

router.get('/', getCirculars);

export default router;
