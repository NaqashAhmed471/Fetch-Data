import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Displaydata.css"

function DisplayData() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  });

  return (
    <div className="displaydata">
      <ul>
        <li>{detail.id}</li>
        <li>{detail.firstName}</li>
        <li>{detail.lastName}</li>
        <li>{detail.fullName}</li>
        <li>{detail.title}</li>
        <li>{detail.family}</li>
        <li>{detail.image}</li>
        <li>
          <img src={detail.imageUrl} alt="userprofile" />
        </li>
      </ul>
    </div>
  );
}

export default DisplayData;
