import express from 'express';
import { getCourse, createCourse, deleteCourse } from '../controllers/courses.js';
import CourseData from '../models/courses.js';

const router = express.Router();

router.get('/', getCourse);
router.post('/', createCourse);
router.delete('/:id', deleteCourse);

export default router;