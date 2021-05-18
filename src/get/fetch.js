import fetch from 'node-fetch';
import { createCustomError } from '../utils/error-handler';

async function fetchMessages(url, requestOptions) {
  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      return createCustomError({
        message: `HTTP Error Response: ${response.status} ${response.statusText}`,
        statusCode: response.status,
      });
    }
    return response;
  } catch (err) {
    const message = `Error fetching url: ${url}`;
    throw createCustomError({ message, details: err });
  }
}

export { fetchMessages };
