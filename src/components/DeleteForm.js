import React from "react";

const UpdateForm = ({ changeHandler, code }) => {
  return (
    <div>
      <form className="deletointi">
        <div>
          Anna pilettikoodisi:{" "}
          <input value={code} type="number" onChange={changeHandler} className="inputti" />
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
