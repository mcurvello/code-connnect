import { useState } from "react";
import "./styles.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <input
      type="text"
      placeholder="Digite o que você procura"
      className="search-bar"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
