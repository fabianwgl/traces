import { Router } from 'express';
import TracesController from './controllers/tracesController';
import StatisticsController from './controllers/statisticsController';

const router = Router();

const tracesController = new TracesController();
const statisticsController = new StatisticsController();

router.post('/traces', tracesController.getIPTrace)
router.get('/statistics', statisticsController.getStatistics);

export default router;