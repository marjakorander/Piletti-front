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
  const [code, setCode] = useState("");

  // GETTING ALL PILETTIS
  useEffect(() => {
    console.log("effect");
    axios.get("/sortatutTulevat").then(response => {
      setData(response.data);
      console.log("Matsku saatu");
      console.log("axios", response.data);
    });
  }, []);

  //FILTER BY CATEGORY
  const handleFilterChange = event => {
    setFilterCategory(event.target.value);
    console.log("Handle filter change (etusivu): ", filterCategory);
  };

  const filteredByCategory =
    filterCategory === "SortatutTulevat"
      ? data
      : data.filter(piletti => piletti.category.includes(filterCategory));

  // GET CODE AND EQUIVALENT ID
  const changeHandler = event => {
    setCode(Number(event.target.value));
    if (code === 0) {
      setCode("");
    }
  };

  // FILTER BY CODE AND GET EQUIVALENT ID

  const checkIfPilettiCode = data.some(piletti => piletti.code === code);

  const filteredByCode = data.filter(piletti => piletti.code === code);
  const getId = filteredByCode.map(p => p.id).toString();

  //DELETE PILETTI

  const submitDelete = event => {
    event.preventDefault();
    axios
      .delete(`http://localhost:8080/piletti/${getId}`)
      .then(response => console.log(response.data))
      .then(setData(data.filter(d => d.code !== code)))
      .then(setCode(""));
  };

  return (
    <div className="etusivu">
      <Linkit />
      <div className="apinNimi">
        <h1>PILETTI</h1>
      </div>
      <Filtteri handleFilterChange={handleFilterChange} />
      <DeleteForm changeHandler={changeHandler} code={code} />
      <div>
        {!code ? (
          <div className="ekat">
            <Piletit filtered={filteredByCategory} />
          </div>
        ) : (
          <div>
            <div className="ekat">
              <Piletit filtered={filteredByCode} />
            </div>
            <div>
              {checkIfPilettiCode && (
                <Delete code={code} submitDelete={submitDelete} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Etusivu;
