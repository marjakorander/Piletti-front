import React, {} from 'react';

const UusiPilettiKoodi = ({showCode, code}) => {

    // Koodin tarkoitus on, että myöhemmin lipun ilmoittaja voi palata poistamaan oman ilmoituksensa koodilla.

        if (!showCode) {
            return (
                null
            )
        }       
        return (
            <div>
                <h1>Koodisi on {code}.
                Ota koodi talteen!</h1>
            </div>
        )
}

export default UusiPilettiKoodi;