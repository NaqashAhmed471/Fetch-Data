import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Displayid.css";
import { Link } from "react-router-dom";

function DisplayID() {
  const [todo, setTodo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((res) => {
        setTodo(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  React.useEffect(() => {
    const results = todo.filter((person) =>
      person.fullName.toLowerCase().includes(searchTerm)
    );
    setTodo(results);
  }, [searchTerm]);
  return (
    <div>
      <div class="topnav">
        <input
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      {todo.map((value, index) => {
        return (
          <div className="displayid">
            <ul className="list">
              <li>{value.id} </li>
              <li> {value.firstName} </li>
              <li>{value.lastName}</li>
            </ul>
            <Link to={`/displaydata/${value.id}`}>Show More</Link>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayID;
