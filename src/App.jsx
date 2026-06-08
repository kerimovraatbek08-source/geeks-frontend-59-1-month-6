import ProductForm from "./components/ProductForm";

import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <h1>Каталог товаров</h1>

      <ProductForm />

      <ProductList />
    </div>
  );
}

export default App;
