import express from 'express';
import { getMessagesRoute } from './routes/messages';

const router = express.Router();

router.use(express.json());

router.get('/messages', getMessagesRoute);

export { router as getRouter };
