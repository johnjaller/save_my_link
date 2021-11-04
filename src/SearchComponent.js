import { useState, useEffect } from "react";

export default function SearchComponent(props) {
  const [query, setQuery] = useState("");
const search=(event)=>{
    const newQuery=event.target.value
    setQuery(newQuery)
    props.search(newQuery)

}
  return (
    <div className="searchBar">
      <label htmlFor="search">🔍Search:</label>
      <input
        className="search"
        name="search"
        type="text"
        value={query}
        placeholder="click here to search"
        onChange={search}
      />
      {query !== "" ? <h3 className='query'>Search result :{query}</h3> : <p></p>}
    </div>
  );
}
