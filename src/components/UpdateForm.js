import React from 'react';

const UpdateForm = ({ changeHandler, submitHandler }) => {
    return (
        <div>
            <form onSubmit={submitHandler} className="deletointi">
            <label htmlFor="filter">Anna pilettikoodisi:</label>
                <input 
                    type="text" 
                    maxLength="5"
                    onChange={changeHandler}
                    className="inputti" />
                {/* <input type="submit" value="Hae piletti" className="pilettihaku" /> */}
            </form>
        </div>
);
}

export default UpdateForm;