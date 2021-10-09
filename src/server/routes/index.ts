import { Router } from 'express';

const router = Router();

router.use((req, res) => res.status(404).send('Route not found'));
export default router;
