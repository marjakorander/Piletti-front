import React from "react";

const Filter = ({ handleFilterChange }) => {
  return (
    <div>
      <form className="filtteri">
        <label htmlFor="filter">Valitse kategoria:</label>
        <select name="category" id="category" onChange={handleFilterChange} className="filtterit">
          <option value="SortatutTulevat">Näytä kaikki</option>
          <option value="Musiikki">Musiikki</option>
          <option value="Urheilu">Urheilu</option>
          <option value="Kulttuuri">Kulttuuri</option>
          <option value="Muu">Muu</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;