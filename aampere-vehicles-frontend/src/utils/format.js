export const priceformatted = (number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  }).format(number)
