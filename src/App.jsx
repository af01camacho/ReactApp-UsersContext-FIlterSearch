import React, { useContext, useState } from "react";
import { ProductContext } from "./context/productProvider";

function App() {
  const { users } = useContext(ProductContext);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredUsers = users.filter((users) =>
    users.nombre.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="">
      <input
        type="text"
        placeholder="Buscar personas por nombre..."
        value={searchKeyword}
        onChange={handleSearchChange}
        className="w-full p-2 outline-none"
      />
      <div className="grid grid-cols-2">
        {filteredUsers.map((users) => (
          <div
            key={users.id}
            className=" grid place-items-center p-2 text-center "
          >
            <img
              src={users.imagen}
              alt=""
              className="rounded-md h-[250px] w-[250px] object-cover"
            />
            <h2 className="text-xl font-bold">{users.nombre}</h2>
            <h2>{users.edad}</h2>
            <span className="w-3/5 py-2 font-light text-black">
              {users.sobre}
            </span>
            <button className="p-2 bg-blue-600 w-3/6 text-white rounded-md">
              Contactar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
