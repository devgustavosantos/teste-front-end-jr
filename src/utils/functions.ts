export function formatOnMoney(value: number): string {
  const valueFixed = Number(value.toFixed(2));

  const valueFormatted = valueFixed.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  });

  return valueFormatted;
}
