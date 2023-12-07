module.exports = async () => {
  const multiPurpose = require('multi-purpose');
  const result = await multiPurpose.customSearch(
    query,
    config,
    apiKey,
    searchEngineId
  );
  return result
};