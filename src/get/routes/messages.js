import { getClientHeaders } from '../../utils/google-auth';
import { getMessagesUrl } from '../../utils/http';
import { fetchMessages } from '../fetch';

async function getMessagesRoute(req, res, next) {
  try {
    const { year, month, day } = req.query;
    const messagesUrl = getMessagesUrl(year, month, day);
    const clientHeaders = await getClientHeaders(messagesUrl);

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    requestOptions.headers['Authorization'] = clientHeaders['Authorization'];
    const response = await fetchMessages(messagesUrl, requestOptions);

    if (response.ok) {
      const messages = await response.json();
      return res.json(messages);
    } else {
      return res.json(response);
    }
  } catch (err) {
    return next(err);
  }
}

export { getMessagesRoute };
