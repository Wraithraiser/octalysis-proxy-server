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

app.use(
  cors({
    origin: function (origin, callback) {
      if (dev) return callback(null, true);

      const whiteListOrigin = [process.env.OCTALYSIS_FRONT_URL];

      // Do no allow requests with no origin
      if (!origin) return callback(new Error("The CORS policy doesn't allow access from undefined origin"), false);

      if (whiteListOrigin.indexOf(origin) === -1) {
        const message = `The CORS policy doesn't allow access from origin: ${origin}`;
        return callback(new Error(message), false);
      }
      return callback(null, true);
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (dev) {
  app.use(logger('dev'));
} else {
  app.use(logger('combined'));
}

const router = express.Router();

router.use('/messages', messagesRouter);

app.use('/api', router);

// Handle errors with middleware
app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
  console.log('\n----- PRODUCTION MODE -----\n');
}
app.listen(PORT, () => console.log(`App listening on port ${PORT}! => http://localhost:${PORT}/`));
