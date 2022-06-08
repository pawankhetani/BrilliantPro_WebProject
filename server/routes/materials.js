import express from 'express';
import { getMaterials, createMaterial, deleteMaterial } from '../controllers/materials.js';
import MaterialData from '../models/materials.js';

const router = express.Router();

router.get('/', getMaterials);
router.post('/', createMaterial);
router.delete('/:id', deleteMaterial);

export default router;