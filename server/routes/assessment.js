import express from 'express';
import { getAssessment, createAssessment, deleteAssessment } from '../controllers/assessment.js';
import AssessmentData from '../models/assessment.js';

const router = express.Router();

router.get('/', getAssessment);
router.post('/', createAssessment);
router.delete('/:id', deleteAssessment);

export default router;