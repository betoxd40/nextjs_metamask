export const api = <T>(url: string, method = 'GET'): Promise<T> => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<T>;
  });
};
