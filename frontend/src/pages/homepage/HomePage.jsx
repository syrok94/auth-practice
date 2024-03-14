
import Header from '../../components/header/Header';
import './HomePage.css';
import { useCart } from '../../CartContext';

const HomePage = () => {
  const { addItems } = useCart();

  const Products = [
    { id: 1, name: 'p1', disc: 'asdasdasd' },
    { id: 2, name: 'p2', disc: 'asdasdasd' },
    { id: 3, name: 'p3', disc: 'asdasdasd' },
    { id: 4, name: 'p4', disc: 'asdasdasd' },
    { id: 5, name: 'p5', disc: 'asdasdasd' },
    { id: 6, name: 'p6', disc: 'asdasdasd' },
    { id: 7, name: 'p7', disc: 'asdasdasd' },
  ];

  const handleAddToCart = (product) => {
    addItems(product);
  };

  return (
    <div className='homepage'>
      <Header />
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Disc</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.disc}</td>
              <td>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
