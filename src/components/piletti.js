import React, { useState } from "react";

const Piletti = ({ id, title, pvm, klo, info, district, price, contact }) => {
  const [ isHidden, setIsHidden ] = useState(true)

  const toggleHidden = () => {
    setIsHidden(!isHidden)
    console.log('is hidden', isHidden)
  };
  
  const Lisatiedot = () => (
    <div className="details">
      <span className="info">{info}</span>
      <span className="district">{district}</span>
      <span className="price">{price} euroa</span>
      <span className="contact">{contact}</span>
    </div>)

return (
      <div className="yksiPiletti" key={id} onClick={toggleHidden}>
        <span className="title">{title}</span>
        <span className="pvm">{pvm}</span>
        <span className="klo">{klo}</span>
        {!isHidden && <Lisatiedot />}
    </div>
)
}

export default Piletti;