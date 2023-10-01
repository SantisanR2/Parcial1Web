import Parte from "./parte";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormattedMessage } from "react-intl";

const { useEffect, useState } = require("react");

function Home() {
 const [home, setHomes] = useState([]);
 useEffect(() => {
   const URL =
     "https://raw.githubusercontent.com/SantisanR2/Parcial1Web/main/datos.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
        setHomes(data);
     });
 }, []);

 return (
   <div className="container">
     <h2 className="mt-2"><FormattedMessage id="ListadoPartes"/></h2>
     <hr></hr>
     <Row>
       {home.map((parte) => (
         <Col key={parte.carModel}>
           <Parte parte={parte} />
         </Col>
       ))}
     </Row>
   </div>
 );
}

export default Home;