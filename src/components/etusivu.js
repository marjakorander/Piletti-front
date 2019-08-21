import React, { useState, useEffect } from "react";
import axios from "axios";
import Linkit from "./linkit";
import Filtteri from "./Filtteri";
import Piletit from "./piletit";

const Etusivu = () => {
  const [data, setData] = useState([]);
  const [filterCategory, setFilterCategory] = useState("SortatutTulevat");

  // getting all the pilettis
  useEffect(() => {
    console.log("effect");
    axios.get("/sortatutTulevat").then(response => {
      setData(response.data);
      console.log("Matsku saatu");
      console.log("axios", response.data);
    });
  }, []);

  const handleFilterChange = event => {
    setFilterCategory(event.target.value);
    console.log("Handle filter change (etusivu): " + filterCategory);
  };

  const filteredPilettis =
    filterCategory === "SortatutTulevat"
      ? data
      : data.filter(piletti => piletti.category.includes(filterCategory));

  console.log("Filtered from Etusivu", filteredPilettis);

  return (
    <div className="etusivu">
      <div className="hederi">
        <Linkit />
      </div>
      <div className="apinNimi">
        <h1>PILETTI</h1>
      </div>
      <Filtteri handleFilterChange={handleFilterChange} />
      <div className="ekat">
        <Piletit filtered={filteredPilettis} />
      </div>
    </div>
  );
};

export default Etusivu;
