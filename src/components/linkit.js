import React from 'react';
import {Link} from 'react-router-dom'; 

const Linkit = () => (
    <header>
        <nav className="hederi">
            <Link className="etusivulinkki" to='/'>Etusivu</Link>
            <Link className="uusilinkki" to='/uusi'>Myy pilettisi</Link>
        </nav>
    </header>
)

export default Linkit;