import { Router } from 'express';
import controllers from '@controllers';
// Init router and path
const router = Router();


router.get('/', controllers.index);

export default router;