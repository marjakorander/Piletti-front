import React from 'react';

const Delete = ({submitDelete}) => {
        return (
            <button onClick={submitDelete}>
                Poista Piletti
            </button>
        )
}

export default Delete;