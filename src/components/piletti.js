import React, { useState }from "react";

const Piletti = ({ id, title, pvm, klo, category, info, district, price, contact }) => {
  const [ isHidden, setIsHidden ] = useState(true)

  const toggleHidden = () => {
    setIsHidden(!isHidden)
    console.log('is hidden', isHidden)
  };
  
  const Lisatiedot = () => (
    <div className="details">
      <span className="category">{category}</span>
      <span className="info">{info}</span>
      <span className="district">{district}</span>
      <span className="price">{price} euroa</span>
      <span className="contact">{contact}</span>
    </div>)

return (
      <div className="yksiTapahtuma" key={id} onClick={toggleHidden}>
        <span className="title">{title}</span>
        <span className="pvm">{pvm}</span>
        <span className="klo">{klo}</span>
        {!isHidden && <Lisatiedot />}
    </div>
)
}

export default Piletti;