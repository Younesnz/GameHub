import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchData<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  conf?: AxiosRequestConfig,
  dependencyList?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);

      apiClient
        .get<FetchData<T>>(endpoint, { ...conf, signal: controller.signal })
        .then((res) => {
          setData(res.data.results);
          setCount(res.data.count);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    dependencyList ? [...dependencyList] : []
  );
  return { data, error, isLoading, count };
};

export default useData;
