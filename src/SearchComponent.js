import { useState, useEffect } from "react";

export default function SearchComponent(props) {
  const [query, setQuery] = useState("");
    useEffect(()=>{
        props.search(query)
    },[query])
  return (
    <div className="searchBar">
      <label htmlFor="search">🔍Search:</label>
      <input
        className="search"
        name="search"
        type="text"
        value={query}
        placeholder="click here to search"
        onChange={(event) => setQuery(event.target.value.toLowerCase())}
      />
      {query !== "" ? <h3 className='query'>Search result :{query}</h3> : <p></p>}
    </div>
  );
}
