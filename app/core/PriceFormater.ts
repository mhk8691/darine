export default function priceFormater(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price);
}
