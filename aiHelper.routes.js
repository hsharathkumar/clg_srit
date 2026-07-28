import express from 'express';
import { queryAiAssistant } from '../controllers/aiHelper.controller.js';

const router = express.Router();

router.post('/query', queryAiAssistant);
router.post('/chat', queryAiAssistant);

export default router;
