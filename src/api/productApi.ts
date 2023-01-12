// Creating feature-based API files.
// These files will export methods which then can be imported and used anywhere in your application.

import api from './api'

export interface Product {
  id?: string
  title: string
  description: string
}

export const fetchProducts = () => api.get<Product[]>('/prouducts')
export const fetchProduct = (id: string) => api.get<Product>(`/prouduct/${id}`)
export const postProduct = (product: Product) =>
  api.post<Product>(`/prouduct/`, product)
export const updateProduct = (id: string, product: Product) =>
  api.put<Product>(`/prouduct/${id}`, product)
