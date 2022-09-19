import { Router } from 'express';
import TracesController from './controllers/tracesController';

const router = Router();

const tracesController = new TracesController();

router.get('/traces', tracesController.dummy)
router.get('/statistics', tracesController.dummy);

export default router;