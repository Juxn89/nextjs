import { IProduct } from '@interfaces/index'
import useSWR, { SWRConfiguration } from 'swr'

// const fetcher = (...arg: [key: string]) => fetch(...arg).then(res => res.json())

export const useProduct = (url: string, config: SWRConfiguration = {}) => {
  // const { data, error } = useSWR<IProduct[]>(`/api/${ url }`, fetcher, config)
  const { data, error } = useSWR<IProduct[]>(`/api/${ url }`, config)

  return {
    products: data || [],
    isLoading: !error && !data,
    isError: error
  }
}