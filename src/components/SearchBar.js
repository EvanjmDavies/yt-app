import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const searchTerm = (e) => {
    e.preventDefault();
    // onFormSubmit will then run the search function in app.js with term & whatevers inside it as the paramater in the function. 'term' must be used in the hooks life also.
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={searchTerm} className="ui form">
        <div className="field">
          <label>Video Search</label>
          {/* you need an event handler (e) => in the onChange otherwise you won't be able to grab the data from the input  */}
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
