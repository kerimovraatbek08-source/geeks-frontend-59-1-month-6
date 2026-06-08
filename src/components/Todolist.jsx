import { useState } from "react";
import { useTodoStore } from "./useTodoStore";

export const TodoList = () => {
  const [text, setText] = useState("");
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "30px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Список задач (ToDo)</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Новая задача..."
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{ padding: "8px 15px", cursor: "pointer" }}
        >
          Добавить
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #eee",
              backgroundColor: todo.completed ? "#f9f9f9" : "transparent",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flex: 1,
              }}
            >
              {/* Чекбокс для отметки выполнения */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ cursor: "pointer", width: "18px", height: "18px" }}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#888" : "#000",
                  wordBreak: "break-word",
                }}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => removeTodo(todo.id)}
              style={{
                backgroundColor: "#ff4d4f",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "5px 10px",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
