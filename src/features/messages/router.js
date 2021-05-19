import express from 'express';
import { getMessagesRoute } from './get-messages';

const router = express.Router();

router.use(express.json());

router.get('/', getMessagesRoute);

export { router as messagesRouter };
