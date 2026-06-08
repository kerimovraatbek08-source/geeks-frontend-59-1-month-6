import { useState } from "react";
import { useProductStore } from "./useProductStore";

function ProductForm() {
  const addProduct = useProductStore((state) => state.addProduct);

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  });

  const submit = (e) => {
    e.preventDefault();

    addProduct({
      title: form.title,
      description: form.description,
      price: Number(form.price),
    });

    setForm({
      title: "",
      description: "",
      price: "",
    });
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Название"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        placeholder="Описание"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <input
        type="number"
        placeholder="Цена"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <button>Добавить</button>
    </form>
  );
}

export default ProductForm;
