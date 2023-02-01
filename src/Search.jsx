import React, { useState } from "react";
import data from "./data.json";

function Search() {
    const [search, setSearch] = useState('')
    const changeHandler = (e) => {
        setSearch(e.target.value)
    }
  return (
    <React.Fragment>
      <input type="text" name="search" id="search" onChange={changeHandler}/>
      <div>
        {data.filter((val) => {
            if(search == "") {
                return val
            } else if(val.first_name.toLowerCase().includes(search.toLowerCase())) {
                return val
            }
        }).map((val, key) => (
          <p key={key}>{val.first_name}</p>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Search;
