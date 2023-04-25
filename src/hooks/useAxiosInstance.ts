import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

type TAxiosInstance = {
  url: string;
  method: 'GET';
  initialData: any;
};

export const useAxiosInstance = ({
  url,
  method,
  initialData,
}: TAxiosInstance) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axiosInstance({
      url,
      method,
      signal: controller.signal,
    })
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [method, url]);

  return { data, loading, error };
};
