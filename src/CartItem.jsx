import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { useGlobalContext } from './GlobalContext'

const CartItem = ({ id, title, img, price, amount }) => {
  const { removeItem, increaseItem, decreaseItem } = useGlobalContext()
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">{price}</span>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => increaseItem(id)}>
          <FaChevronUp />
        </button>
        <span className="amount">{amount}</span>
        <button className="amount-btn" onClick={() => decreaseItem(id)}>
          <FaChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
