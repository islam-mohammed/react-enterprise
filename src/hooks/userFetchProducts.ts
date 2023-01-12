import { fetchProducts, Product } from '@/api/productApi'
import { useQuery } from 'react-query'

const useFetchProducts = () => {
  const {
    data: products,
    isLoading: isProductsLoading,
    isSuccess: isProductSuccess,
    isError: isProductError,
  } = useQuery<Product[]>('products', fetchProducts)

  return {
    products,
    isProductError,
    isProductsLoading,
    isProductSuccess,
  }
}

export default useFetchProducts
