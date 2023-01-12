import { ApiStatus } from '@/api/api'
import { fetchProducts, Product } from '@/api/productApi'
import { withAsync } from '@/helpers/withAsync'
import { useState } from 'react'
import useApiStatus from './useApiStatus'

const useFetchProducts = () => {
  const {
    setStatus,
    isError: isFetchProductsError,
    isIdeal: isFetchProductsIdeal,
    isPinding: isFetchProductPinding,
    isSuccess: isFetchProductSuccess,
  } = useApiStatus(ApiStatus.IDLE)
  const [products, setProducts] = useState<Product[]>([])
  const initProuducts = async () => {
    const { response, error } = await withAsync(() => fetchProducts())
    if (error) {
      setStatus(ApiStatus.ERROR)
    } else if (response) {
      setProducts(response.data)
      setStatus(ApiStatus.SUCCESS)
    }
  }

  return {
    initProuducts,
    products,
    isFetchProductPinding,
    isFetchProductSuccess,
    isFetchProductsError,
    isFetchProductsIdeal,
  }
}

export default useFetchProducts
