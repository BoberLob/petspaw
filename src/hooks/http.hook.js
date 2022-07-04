import { useState, useCallback } from "react";

const useHttp = () => {
  const [process, setProcess] = useState('waiting');

  const request = useCallback(async (url, method = 'GET', body = null, headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'api_key=7fea8c76-40f9-4f2e-b122-3653a2d9e083'
  }) => {

    setProcess('loading');

    try {
      const response = await fetch(url, {method, body, headers});
      
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`)
      }

      const data = await response.json();

      return(data);

    } catch(e) {
      setProcess('error');
      throw e;
    }

  }, []);

  const clearError = useCallback(() => {
    setProcess('loading');
  }, []);

  return { request, clearError, process, setProcess };
}

export default useHttp;