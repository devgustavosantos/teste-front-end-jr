import { useContext } from 'react';

import { ProductModalContext } from '../../contexts/ProductModal';
import { ProductInfos } from '../../types/product';
import { formatOnMoney } from '../../utils/functions';

export function useCard({
  productName,
  descriptionShort,
  photo,
  price,
}: ProductInfos) {
  const { onOpenModal } = useContext(ProductModalContext);

  const priceFormatted = formatOnMoney(price);

  const addition = 10;

  const oldPrice = (price * addition) / 100 + price;
  const oldPriceFormatted = formatOnMoney(oldPrice);

  const installment = 12;

  const installmentPrice = price / installment;
  const installmentPriceFormatted = formatOnMoney(installmentPrice);

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
