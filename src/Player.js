import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Player=({name,team,nationality,jerseyNumber,age,imageUrl})=> {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           <strong>team:</strong>{name}
           <br/>
           <strong>nationality:</strong>{nationality}
           <br/>
           <strong>jersey number:</strong>{jerseyNumber}
           <br/>
           <strong>age:</strong>{age}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Player