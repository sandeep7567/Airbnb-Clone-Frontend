import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";

interface QueryParams {
  [key: string]: string | number | boolean | undefined;
}

const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const request = async <T>(
  method: Method,
  url: string,
  data?: any,
  queryParams?: QueryParams,
  headers?: Record<string, string>,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const fullUrl = `${BASE_URL}${url}`; // Construct the full URL by prepending the BASE_URL
  const config: AxiosRequestConfig = {
    method,
    url: fullUrl, // Use the full URL
    data,
    params: queryParams,
    headers: { ...headers, ...(options?.headers || {}) },
    ...options,
    withCredentials: true,
  };
  try {
    const response: AxiosResponse<T> = await axiosInstance.request(config);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const apiService = {
  query: <T>(
    url: string,
    queryParams?: QueryParams,
    headers?: Record<string, string>,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    request<T>("GET", url, undefined, queryParams, headers, options),

  mutation: <T>(
    method: Method,
    url: string,
    data: any,
    queryParams?: QueryParams,
    headers?: Record<string, string>,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    request<T>(method, url, data, queryParams, headers, options),
};

export default apiService;
