import apiClient from "../services/apiClient";
import { AxiosRequestConfig } from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

interface FetchData<T> {
  count: number;
  results: T[];
  next: string | null;
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

export const useInfiniteData = <T>(
  endpoint: string,
  queryKey: any[],
  conf?: AxiosRequestConfig
) =>
  useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) =>
      apiClient
        .get<FetchData<T>>(endpoint, {
          params: { ...conf?.params, page: pageParam },
        })
        .then((res) => res.data),
    initialPageParam: 1,
    getNextPageParam: (LastPage, allPages) =>
      LastPage.next ? allPages.length + 1 : undefined,
  });
export default useData;
