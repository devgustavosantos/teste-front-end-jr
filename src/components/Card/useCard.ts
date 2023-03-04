export function useCard(price: number) {
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

  return {
    priceFormatted,
    oldPriceFormatted,
    installment,
    installmentPriceFormatted,
  };
}
