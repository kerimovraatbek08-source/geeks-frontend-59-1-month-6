import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "./features/usersSlice";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <h1>Загрузка...</h1>;
  }

  if (error) {
    return <h1>Ошибка: {error}</h1>;
  }

  return (
    <div className="container">
      <h1>Пользователи</h1>

      <div className="cards">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h2>{user.name}</h2>

            <p>Email: {user.email}</p>

            <p>Телефон: {user.phone}</p>

            <p>Город: {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
