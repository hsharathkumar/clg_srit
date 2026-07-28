import express from 'express';
import { getAdmissionsInfo, submitEnquiry } from '../controllers/admissions.controller.js';

const router = express.Router();

router.get('/', getAdmissionsInfo);
router.post('/enquiry', submitEnquiry);

export default router;
