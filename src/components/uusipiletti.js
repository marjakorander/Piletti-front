import React, { useState } from "react";
import Linkit from "./Linkit";
import UusiPilettiKoodi from "./UusiPilettiKoodi";
import axios from "axios";

const Uusipiletti = () => {
  const [category, setCategory] = useState("Valitse");
  const [contact, setContact] = useState();
  const [district, setDistrict] = useState("Valitse");
  const [info, setInfo] = useState();
  const [price, setPrice] = useState();
  const [title, setTitle] = useState();
  const [paivays, setPaivays] = useState();
  const [klo, setKlo] = useState();
  const [code, setCode] = useState();
  const [showCode, setShowCode] = useState(false);

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handlePriceChange = event => {
    setPrice(event.target.value);
  };

  const handleInfoChange = event => {
    setInfo(event.target.value);
  };

  const handlePvmChange = event => {
    setPaivays(event.target.value);
  };

  const handleKloChange = event => {
    setKlo(event.target.value);
  };

  const handleContactChange = event => {
    setContact(event.target.value);
  };

  const handleDistrictChange = event => {
    setDistrict(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const random = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
    setCode(random);
    const uusiPiletti = {
      category: category,
      contact: contact,
      district: district,
      info: info,
      price: price,
      title: title,
      paivays: paivays,
      klo: klo + ":00",
      code: random
    };
    axios.post("http://localhost:8080/uusi/", uusiPiletti).then(
      response => {
        // console.log(response);
        setCode(response.data.code);
      },
      error => {
        console.log(error);
      }
    );
    setShowCode(true);
  };

  const isEnabled =
    category.length > 0 &&
    category !== "Valitse" &&
    district.length > 0 &&
    district !== "Valitse" &&
    title.length > 0 &&
    price.length > 0 &&
    klo.length > 0 &&
    paivays.length > 0 &&
    info.length > 0 &&
    contact.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/);

  return (
    <div className={"uusiPiletti"}>
      <Linkit />
      <div className="apinNimiPieni">
        <h2>PILETTI</h2>
      </div>
      <form className="upiletti" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="title">Otsikko</label>
                <input
                  name="title"
                  id="title"
                  type="text"
                  maxLength={255}
                  onChange={handleTitleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="category">Kategoria</label>
              </td>
              <td>
                {" "}
                <select
                  name="category"
                  id="category"
                  onChange={handleCategoryChange}
                >
                  <option value="Valinta">Valitse</option>
                  <option value="Musiikki">Musiikki</option>
                  <option value="Urheilu">Urheilu</option>
                  <option value="Kulttuuri">Kulttuuri</option>
                  <option value="Muu">Muu</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="price">Hinta (euroa)</label>
                <input
                  name="price"
                  id="price"
                  type="number"
                  onChange={handlePriceChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="info">Info</label>
                <input
                  name="info"
                  id="info"
                  type="text"
                  maxLength={255}
                  onChange={handleInfoChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="paivays">Päivämäärä</label>
                <input
                  name="paivays"
                  id="paivays"
                  type="date"
                  onChange={handlePvmChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="klo">Kellonaika</label>
                <input
                  name="klo"
                  id="klo"
                  type="time"
                  onChange={handleKloChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="contact">Sähköpostiosoite</label>
                <input
                  name="contact"
                  id="contact"
                  type="text"
                  maxLength={255}
                  onChange={handleContactChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="district">Missä lippu?</label>
              </td>
              <td>
                {" "}
                <select
                  name="district"
                  id="district"
                  onChange={handleDistrictChange}
                >
                  <option value="ValitseAlue‎">Valitse</option>
                  <option value="Etu-Töölö‎">Etu-Töölö</option>
                  <option value="Haaga">Haaga</option>
                  <option value="Hermanni‎">Hermanni</option>
                  <option value="Herttoniemi">Herttoniemi</option>
                  <option value="Kaarela‎">Kaarela</option>
                  <option value="Kaartinkaupunki‎">Kaartinkaupunki</option>
                  <option value="Kaivopuisto‎">Kaivopuisto</option>
                  <option value="Kalasatama‎">Kalasatama</option>
                  <option value="Kallio‎">Kallio</option>
                  <option value="Kamppi‎">Kamppi</option>
                  <option value="Katajanokka‎">Katajanokka</option>
                  <option value="Kluuvi‎">Kluuvi</option>
                  <option value="Konala‎">Konala</option>
                  <option value="Koskela‎">Koskela</option>
                  <option value="Kruununhaka">Kruununhaka‎</option>
                  <option value="Kulosaari‎">Kulosaari</option>
                  <option value="Kumpula‎">Kumpula‎</option>
                  <option value="Käpylä">Käpylä</option>
                  <option value="Laajasalo‎">Laajasalo‎</option>
                  <option value="Laakso‎">Laakso‎</option>
                  <option value="Lauttasaari‎">Lauttasaari‎</option>
                  <option value="Länsisatama‎">Länsisatama‎</option>
                  <option value="Malmi‎">Malmi‎</option>
                  <option value="Meilahti‎">Meilahti‎</option>
                  <option value="Mellunkylä‎">Mellunkylä</option>
                  <option value="Munkkiniemi‎">Munkkiniemi‎</option>
                  <option value="Mustikkamaa–Korkeasaari‎">
                    Mustikkamaa–Korkeasaari‎
                  </option>
                  <option value="Oulunkylä‎">Oulunkylä</option>
                  <option value="Pakila‎">Pakila‎</option>
                  <option value="Pasila‎">Pasila‎</option>
                  <option value="Pitäjänmäki‎">Pitäjänmäki</option>
                  <option value="Pukinmäki‎">Pukinmäki</option>
                  <option value="Punavuori‎">Punavuori</option>
                  <option value="Ruskeasuo‎">Ruskeasuo</option>
                  <option value="Santahamina‎">Santahamina</option>
                  <option value="Suurmetsä‎">Suurmetsä</option>
                  <option value="Suutarila‎">Suutarila</option>
                  <option value="Sörnäinen‎">Sörnäinen‎</option>
                  <option value="Taka-Töölö‎">Taka-Töölö</option>
                  <option value="Tammisalo‎">Tammisalo</option>
                  <option value="Tapaninkylä‎">Tapaninkylä</option>
                  <option value="Toukola‎">Toukola</option>
                  <option value="Tuomarinkylä‎">Tuomarinkylä</option>
                  <option value="Töölö‎">Töölö</option>
                  <option value="Ulkosaaret‎">Ulkosaaret</option>
                  <option value="Ullanlinna‎">Ullanlinna</option>
                  <option value="Ultuna‎">Ultuna</option>
                  <option value="Vallila‎">Vallila</option>
                  <option value="Vanhakaupunki‎">Vanhakaupunki</option>
                  <option value="Vartiokylä‎">Vartiokylä</option>
                  <option value="Vartiosaari‎">Vartiosaari</option>
                  <option value="Viikki‎">Viikki</option>
                  <option value="Vuosaari‎">Vuosaari</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="tallennusnappi" disabled={!isEnabled} type="submit">
          Tallenna ilmoitus
        </button>
      </form>
      <div>
        <UusiPilettiKoodi showCode={showCode} code={code} />
      </div>
    </div>
  );
};

export default Uusipiletti;
