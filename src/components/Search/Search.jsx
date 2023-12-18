import { useState } from "react";
import "./Search.css";
import { SearchInput } from "./SearchInput.jsx/SearchInput";
import { SearchList } from "./SearchList/SearchList";

const products = [
  {
    title: "Iphone",
    id: 1,
  },
  {
    title: "Samsung",
    id: 2,
  },
  {
    title: "Oppo",
    id: 3,
  },
  {
    title: "Vivo",
    id: 4,
  },
  {
    title: "Pixel",
    id: 5,
  },
  {
    title: "Nokia",
    id: 6,
  },
  {
    title: "Huvai",
    id: 7,
  },
];

export function Search() {
  const [prodcutsList, setProdcutsList] = useState(products);
  const [feildInput, setFeildInput] = useState("");
  const [filterd, setFilterd] = useState([]);

  function handleChange(e) {
    setFeildInput(e.target.value);

    const filterProducts = prodcutsList.filter((data) => {
      return data.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setFilterd(filterProducts);
  }

  function clearSearch() {
    setFeildInput("");
    setFilterd([]);
  }
  console.log(feildInput);
  console.log(prodcutsList);
  return (
    <>
      <header className="header-container">
        <div className="searchinput-container">
          <SearchInput
            handleChange={handleChange}
            feildInput={feildInput}
            clearSearch={clearSearch}
          />
        </div>
      </header>

      <div className="searchList-container">
        <SearchList filterd={filterd} feildInput={feildInput} />
      </div>
    </>
  );
}
