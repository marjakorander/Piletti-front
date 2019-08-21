import React from "react";
import Piletti from "./piletti";

const Piletit = ({ filtered }) => {
  const tapahtumalista = filtered.map(filtered => {
    // date to milliseconds and then back to date
    var paivays = new Date(filtered.paivays);
    var millisekunnit = paivays.getTime();
    var mikaPaiva = new Date(millisekunnit).toLocaleDateString("fi");

    var kellonaika = filtered.klo;
    var mihinAikaan = kellonaika.substr(0, 5);

    return (
      <div key={filtered.id}>
        <Piletti
          id={filtered.id}
          title={filtered.title}
          pvm={mikaPaiva}
          klo={mihinAikaan}
          category={filtered.category}
          info={filtered.info}
          district={filtered.district}
          price={filtered.price}
          contact={filtered.contact}
          code={filtered.code}
        />
      </div>
    );
  });
  return <div>{tapahtumalista}</div>;
};

export default Piletit;
