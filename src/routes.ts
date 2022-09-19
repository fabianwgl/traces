import { Router } from 'express';
import TracesController from './controllers/tracesController';

const router = Router();

const tracesController = new TracesController();

router.post('/traces', tracesController.getIPTrace)
router.get('/statistics', tracesController.dummy);

export default router;