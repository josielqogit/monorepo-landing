const setBaseUrl = (base: string) => (endpoint: string) => {
  const apiBaseUrl = base;
  return `${apiBaseUrl}${endpoint}`;
}

export default setBaseUrl;
