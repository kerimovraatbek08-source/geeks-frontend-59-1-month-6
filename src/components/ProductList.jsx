import { useProductStore } from "./useProductStore";

function ProductList() {
  const { products, removeProduct } = useProductStore();

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>

          <p>{item.description}</p>

          <h3>{item.price}$</h3>

          <button onClick={() => removeProduct(item.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
