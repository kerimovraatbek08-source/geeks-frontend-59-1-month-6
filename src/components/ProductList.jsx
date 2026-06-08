import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getProducts, deleteProduct } from "../api/products";

function ProductList() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["products"],

    queryFn: getProducts,
  });

  const mutation = useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            padding: "20px",
            margin: "10px",
          }}
        >
          <h2>{item.title}</h2>

          <p>{item.description}</p>

          <h3>{item.price} сом</h3>

          <button onClick={() => mutation.mutate(item.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
