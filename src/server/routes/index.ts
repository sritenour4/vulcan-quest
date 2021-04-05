import { Router } from 'express';
import statuesRouter from './statues';

const router = Router();

router.use('/statues', statuesRouter);

export default router;