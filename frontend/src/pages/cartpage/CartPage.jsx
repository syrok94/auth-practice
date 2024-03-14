
import { useCart } from "../../CartContext";

const CartPage = () => {
  const { CartItems, removeItems } = useCart();

  const handleRemove = (id) => {
    removeItems(id);
  };

  return (
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Disc</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {CartItems.map((product,index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.disc}</td>
              <td>
                <button onClick={() => handleRemove(product.id)}>
                  Remove from Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;
