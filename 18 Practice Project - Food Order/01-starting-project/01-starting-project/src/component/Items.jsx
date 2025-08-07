import { useContext } from "react";
import currencyFormatter from "../util/formatter";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
export default function Item({ m }) {
  const cartCtx = useContext(CartContext);
  function handleAddMealToCart() {
    cartCtx.addItem(m);
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3002/${m.image}`} alt={m.image} />
        <div>
          <h3>{m.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(m.price)}</p>
          <p className="meal-item-description">{m.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add TO Cart</Button>
        </p>
      </article>
    </li>
  );
}
