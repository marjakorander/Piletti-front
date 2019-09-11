import React from "react";

const UusiPilettiKoodi = ({ showCode, code }) => {
  if (!showCode) {
    return null;
  }
  return (
    <div>
      <h1>Koodisi on {code}. Ota koodi talteen!</h1>
    </div>
  );
};

export default UusiPilettiKoodi;
