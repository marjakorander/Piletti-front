import React, { useState, useEffect } from "react";
import axios from "axios";
import Linkit from "./Linkit";
import Filtteri from "./Filtteri";
import Piletit from "./Piletit";
import DeleteForm from "./DeleteForm";
import Delete from "./Delete";

const Etusivu = () => {
  const [data, setData] = useState([]);
  const [filterCategory, setFilterCategory] = useState("SortatutTulevat");
  const [id, setId] = useState("");

  // GETTING ALL PILETTIS
  useEffect(() => {
    console.log("effect");
    axios.get("/sortatutTulevat").then(response => {
      setData(response.data);
      console.log("Matsku saatu");
      console.log("axios", response.data);
    });
  }, []);

  //FILTERING BY CATEGORY
  const handleFilterChange = event => {
    setFilterCategory(event.target.value);
    console.log("Handle filter change (etusivu): ", filterCategory);
  };

  const filteredByCategory = 
    filterCategory === "SortatutTulevat"
      ? data
      : data.filter(piletti => piletti.category.includes(filterCategory));

  // FILTER BY CODE
  const filteredByCode = data.filter(piletti => piletti.id === id);

  const checkIfPilettiCode = data.some(piletti => piletti.id === id);
  console.log(checkIfPilettiCode)

  const changeHandler = event => {
      setId(Number(event.target.value));
      if (id === 0) {
        setId("")
      }
  }

  //DELETE PILETTI

  const submitDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://localhost:8080/piletti/${id}`)
      .then(response => console.log(response.data))
      .then(setData(data.filter(d => d.id !== id)))
      .then(setId(""))
    console.log("Piletti, jonka id on", id, "on poistettu")
  }

  return (
    <div className="etusivu">
        <Linkit />
      <div className="apinNimi">
        <h1>PILETTI</h1>
      </div>
        <Filtteri handleFilterChange={handleFilterChange} />
        <DeleteForm changeHandler={changeHandler} id={id}/>
      <div>
      {!id ? (
          <div className="ekat">
            <Piletit filtered={filteredByCategory} />
          </div>
        ) : (
          <div>
            <div className="ekat">
              <Piletit filtered={filteredByCode} />
            </div>
            <div> 
              {checkIfPilettiCode && <Delete givenCode={id} submitDelete={submitDelete}/>}
            </div>  
          </div>
          )}
      </div>    
    </div>
  );
};

export default Etusivu;