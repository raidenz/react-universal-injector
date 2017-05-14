export const serverEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3001/api/v1';

export const generateJwtHeader = (state) => {
  const token = `${state.account.token}`;

  return {
    'X-Authentication-Token': token,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
};
