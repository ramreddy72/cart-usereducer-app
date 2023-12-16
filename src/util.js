export const getDetailsCost = ({ cart }) => {
  let totalAmount = 0
  let totalCost = 0

  const cartArray = Array.from(cart.entries())
  cartArray.forEach((cartItem) => {
    let [id, item] = cartItem
    totalAmount += item.amount
    totalCost += item.amount * item.price
  })

  return { totalAmount, totalCost }
}
