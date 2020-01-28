import { Router } from 'express';

import testRoutes from './TestRoutes';

const router = Router();

router.use('/api/v1/tests', testRoutes);

export default router;
