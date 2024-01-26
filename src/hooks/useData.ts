import apiClient from "../services/apiClient";
import { AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";

interface FetchData<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  queryKey: any[],
  conf?: AxiosRequestConfig
) =>
  useQuery<FetchData<T>, Error, FetchData<T>>({
    queryKey,
    queryFn: () =>
      apiClient
        .get<FetchData<T>>(endpoint, { ...conf })
        .then((res) => res.data),
  });

export default useData;
