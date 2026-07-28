import express from 'express';
import { getPlacementsInfo } from '../controllers/placements.controller.js';

const router = express.Router();

router.get('/', getPlacementsInfo);

export default router;
