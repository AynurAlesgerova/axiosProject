import { useState } from "react";
import "./App.css";
import searchItems from "./axios";
import { Search } from "./components/Search";
import { SearchList } from "./components/SearchList";

function App() {
  const [data, setData] = useState([])
  const handleSubmit = async (term) => {
    const result = await searchItems(term);
    setData(result)
  };
  console.log(data);
  return (
    <div className="App">
      <Search search={handleSubmit} />
      <SearchList list={data}/>
    </div>
  );
}

export default App;
