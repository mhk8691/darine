export default function priceFormater(price: number) {
  return price ? new Intl.NumberFormat('fa-IR').format(price):''
}
