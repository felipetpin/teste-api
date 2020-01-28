import { Router } from 'express';
import TestController from '../controllers/TestController';

const router = Router();

router.get('/', TestController.getAllTests);
router.post('/', TestController.addTest);
router.get('/:id', TestController.getATest);
router.put('/:id', TestController.updatedTest);
router.delete('/:id', TestController.deleteTest);

export default router;
