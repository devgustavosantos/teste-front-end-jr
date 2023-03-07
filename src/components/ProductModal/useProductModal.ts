import { useContext } from 'react';

import { ProductModalContext } from '../../contexts/ProductModal';

export function useProductModal() {
  const { currentProduct, onCloseModal } = useContext(ProductModalContext);

  function handleCloseProductModal() {
    onCloseModal();
  }

  return { currentProduct, handleCloseProductModal };
}
