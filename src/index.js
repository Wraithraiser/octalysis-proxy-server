import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import { initEnvVar } from './utils/env';
import { messagesRouter } from './features/messages/router';
import { errorHandler } from './utils/error-handler';

initEnvVar();

const app = express();
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (dev) {
  app.use(logger('dev'));
} else {
  app.use(logger('combined'));
}

const router = express.Router();

app.get('/', (req, res) => {
  res.send('Welcome to Octalysis Proxy server');
});

router.use('/messages', messagesRouter);

app.use('/api', router);

// Handle errors with middleware
app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
  console.log('\n----- PRODUCTION MODE -----\n');
}
app.listen(PORT, () => console.log(`App listening on port ${PORT}! => http://localhost:${PORT}/`));
