import { useContext } from 'react';

import { ProductModalContext } from '../../contexts/ProductModal';
import { ProductInfos } from '../../types/product';

export function useCard({
  productName,
  descriptionShort,
  photo,
  price,
}: ProductInfos) {
  const { onOpenModal } = useContext(ProductModalContext);

  const priceFixed = Number(price.toFixed(2));
  const priceFormatted = priceFixed.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  });

  const addition = 10;

  const oldPrice = Number(((price * addition) / 100 + price).toFixed(2));
  const oldPriceFormatted = oldPrice.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  });

  const installment = 12;

  const installmentPrice = Number((price / installment).toFixed(2));
  const installmentPriceFormatted = installmentPrice.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  });

  function handleOpenProductModal() {
    onOpenModal({
      productName,
      descriptionShort,
      photo,
      price,
    });
  }

  return {
    priceFormatted,
    oldPriceFormatted,
    installment,
    installmentPriceFormatted,
    handleOpenProductModal,
  };
}
