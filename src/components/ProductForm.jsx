import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createProduct } from "../api/products";

function ProductForm() {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  });

  const mutation = useMutation({
    mutationFn: createProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  const submit = (e) => {
    e.preventDefault();

    mutation.mutate({
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
        placeholder="title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        placeholder="description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <input
        type="number"
        placeholder="price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <button>Создать</button>
    </form>
  );
}

export default ProductForm;
