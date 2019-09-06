import React, { useState, useEffect } from "react";
import axios from "axios";
import Linkit from "./Linkit";
import Filtteri from "./Filtteri";
import Piletit from "./Piletit";
import UpdateForm from "./UpdateForm";
import Delete from "./Delete";

const Etusivu = () => {
  const [data, setData] = useState([]);
  const [filterCategory, setFilterCategory] = useState("SortatutTulevat");
  const [givenCode, setGivenCode] = useState("");
  // const [pilettiFound, setPilettiFound] = useState("false");

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

  const filteredByCode = data.filter(piletti => piletti.code === givenCode);

  const checkIfPilettiCode = data.some(piletti => piletti.code === givenCode);
  console.log(checkIfPilettiCode)
    
  const submitHandler = event => {
    event.preventDefault();
    console.log(givenCode)
  }

  const changeHandler = event => {
      setGivenCode(Number(event.target.value));
  }

  return (
    <div className="etusivu">
        <Linkit />
      <div className="apinNimi">
        <h1>PILETTI</h1>
      </div>
        <Filtteri handleFilterChange={handleFilterChange} />
        <UpdateForm changeHandler={changeHandler} submitHandler={submitHandler} />
      <div>
      {!givenCode || givenCode === "0" ? (
          <div className="ekat">
            <Piletit filtered={filteredByCategory} />
          </div>
        ) : (
          <div>
            <div className="ekat">
              <Piletit filtered={filteredByCode} />
            </div>
            <div> 
              {checkIfPilettiCode && <Delete givenCode={givenCode} />}
            </div>  
          </div>
          )}
      </div>    
    </div>
  );
};

export default Etusivu;