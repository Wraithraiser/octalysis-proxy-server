import { GoogleAuth } from 'google-auth-library';
import { createCustomError } from './error-handler';

async function getClientHeaders(url) {
  try {
    const auth = new GoogleAuth();
    const client = await auth.getIdTokenClient(url);
    const clientHeaders = await client.getRequestHeaders();

    return clientHeaders;
  } catch (err) {
    const message = 'Error on creating identity token for google auth';
    throw createCustomError({ message, statusCode: 403, details: err });
  }
}

export { getClientHeaders };
