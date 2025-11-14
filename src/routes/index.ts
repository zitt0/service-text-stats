import * as Router from 'koa-router';
import { textStatsMiddleware } from './middlewares';

const router = new Router();

router.post('/text/stats', textStatsMiddleware);

export default router;
