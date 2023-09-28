import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
export default function Detail() {
 const params = useParams();

 function random() {
  let random = Math.random();
  let num = Math.round(random);
  if (num === 0) {
    return true;
  }
  else {return false}
  }

 return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
    {random() && <Card.Text>Usted es admin</Card.Text>}
    <Card.Img
      style={{ height: "14rem" }}
      variant="top"
      src={params.image}
      alt={params.description}
    />
    {!random() && <Card.Body>
      <Card.Title>
        {params.partNames}
      </Card.Title>
      <Card.Text>{params.description}</Card.Text>
      <Card.Text>{params.price +" - "+ params.carYear}</Card.Text>
    </Card.Body>}
    {random() && <Card.Body>
      <input>
        {params.partNames}
      </input>
      <input>{params.description}</input>
      <input>{params.price +" - "+ params.carYear}</input>
    </Card.Body>}
  </Card>
);
}