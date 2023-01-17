import { Router } from 'express';
import { postCheckToken, getTokensUsers, getTokensBots } from '../controllers/tokens';
import { validateToken } from '../middlewares/tokens';
let router = Router();

router.post(`/tokens/check`, [validateToken], postCheckToken);
router.get(`/tokens/users`, getTokensUsers);
router.get(`/tokens/bots`, getTokensBots);

export default router;