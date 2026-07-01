export default function priceFormatter(price: number | null | undefined) {
  return price != null
    ? new Intl.NumberFormat('fa-IR').format(price)
    : '0';
}