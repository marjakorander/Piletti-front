import React from 'react';

const UpdateForm = ({ changeHandler, id }) => {
    return (
        <div>
            <form className="deletointi">
                <div>
                    Anna pilettikoodisi: <input value={id} onChange={changeHandler} className="inputti"/>
                </div>
            </form>
        </div>
);
}

export default UpdateForm;