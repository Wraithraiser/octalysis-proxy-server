function getApiUri() {
  return process.env.NODE_ENV !== 'production'
    ? `${process.env.OCTALYSIS_LOCAL_API_URL}`
    : `${process.env.OCTALYSIS_API_URL}`;
}

function getMessagesUrl(year, month, day) {
  const API_URI = getApiUri();
  const API_GET_MESSAGES_URL = `${API_URI}/api/mongo/read/conversations.messages`;
  if (day && month && year) {
    return `${API_GET_MESSAGES_URL}?year=${year}&month=${month}&day=${day}`;
  }
  if (month && year) {
    return `${API_GET_MESSAGES_URL}?year=${year}&month=${month}`;
  }
  if (year) {
    return `${API_GET_MESSAGES_URL}?year=${year}`;
  }
  return `${API_GET_MESSAGES_URL}`;
}

export { getMessagesUrl };
