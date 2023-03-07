import { useContext } from 'react';
import { useQuery } from 'react-query';

import { ProductModalContext } from '../../contexts/ProductModal';
import { api } from '../../services/api';

export function useHome() {
  const { isProductModalOpen } = useContext(ProductModalContext);

  async function getProducts() {
    const response = await api.get('');

    const { products } = response.data;

    return products;
  }

  const { data: products, isLoading } = useQuery({
    queryKey: 'products',
    queryFn: getProducts,
  });

  return { products, isLoading, isProductModalOpen };
}
