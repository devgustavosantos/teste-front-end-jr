import { createContext, ReactNode, useState } from 'react';

import { ProductInfos } from '../types/product';

type ProductModalProviderProps = {
  children: ReactNode;
};

type ProductModalType = {
  onOpenModal: ({
    productName,
    descriptionShort,
    photo,
    price,
  }: ProductInfos) => void;
  onCloseModal: () => void;
  isProductModalOpen: boolean;
  currentProduct: ProductInfos | null;
};

export const ProductModalContext = createContext({} as ProductModalType);

export function ProductModalProvider({ children }: ProductModalProviderProps) {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductInfos | null>(
    null,
  );

  function onOpenModal({
    productName,
    descriptionShort,
    photo,
    price,
  }: ProductInfos) {
    setIsProductModalOpen(true);

    setCurrentProduct({ productName, descriptionShort, photo, price });
  }

  function onCloseModal() {
    setIsProductModalOpen(false);

    setCurrentProduct(null);
  }

  return (
    <ProductModalContext.Provider
      value={{
        onOpenModal,
        onCloseModal,
        isProductModalOpen,
        currentProduct,
      }}
    >
      {children}
    </ProductModalContext.Provider>
  );
}
