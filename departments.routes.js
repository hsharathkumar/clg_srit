import express from 'express';
import { getAllDepartments, getDepartmentByCode } from '../controllers/departments.controller.js';

const router = express.Router();

router.get('/', getAllDepartments);
router.get('/:code', getDepartmentByCode);

export default router;
