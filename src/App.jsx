import React, { useEffect, useState } from "react";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";

import "./styles/App.css";

const getItemInLocalStorage = () => {
  const list = localStorage.getItem("list");

  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

export default function App() {
  const [vibilite, setVisibilite] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState(getItemInLocalStorage());

  const createItem = () => {
    if (value) {
      setItems([...items, value]);
      setValue("");
    }
  };

  const deleteItem = (index) => {
    const updateItem = items.filter((elem, id) => {
      return id !== index;
    });

    setItems(updateItem);
  };

  const deleteAllItems = () => {
    setItems([]);
    setVisibilite(false);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (items.length === 2) {
      setVisibilite(true);
    }
  }, [items]);

  return (
    <div className="primary-element">
      <header>
        <h1>ToDo List</h1>
      </header>
      <div className="form-container">
        <div className="form">
          <input
            type="text"
            placeholder="Tarefas"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="button" onClick={() => createItem()}>
            <AiOutlinePlus size="1.5rem" alt="Imagem de save" />
          </button>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="list-items">
            {items.map((item, key) => {
              return (
                <div key={key} className="item">
                  <span>{item}</span>
                  <button
                    type="button"
                    className="delete"
                    onClick={() => deleteItem(key)}
                  >
                    <AiFillDelete
                      size="1.5rem"
                      alt="Botão para deletar tarefa"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        {vibilite && (
          <button className="clear" onClick={() => deleteAllItems()}>
            Limpar
          </button>
        )}
      </main>
    </div>
  );
}
