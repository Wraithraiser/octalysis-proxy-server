function getApiUri() {
  return process.env.NODE_ENV !== 'production'
    ? `${process.env.OCTALYSIS_LOCAL_API_URL}`
    : `${process.env.OCTALYSIS_API_URL}`;
}

function getMessagesUrl(year, month, day) {
  const API_URI = getApiUri();
  return `${API_URI}/api/mongo/read/conversations.messages?year=${year}&month=${month}&day=${day}`;
}

export { getMessagesUrl };
