import express from 'express';
import { getResearchInfo } from '../controllers/research.controller.js';

const router = express.Router();

router.get('/', getResearchInfo);

export default router;
