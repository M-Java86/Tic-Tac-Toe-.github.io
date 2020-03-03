import React from "react";

export default function Search(props) {
  return (
    <div>
      <input
        type="text"
        value={props.query}
        onChange={props.handleInputChange}
      />
      <button onClick={props.handleSubmitQuery}>Search</button>
    </div>
  );
}
