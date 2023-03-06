import { useQuery } from 'react-query';

import { api } from '../../services/api';

export function useHome() {
  async function getProducts() {
    const response = await api.get('');

    const { products } = response.data;

    return products;
  }

  const { data: products, isLoading } = useQuery({
    queryKey: 'products',
    queryFn: getProducts,
  });

  return { products, isLoading };
}
