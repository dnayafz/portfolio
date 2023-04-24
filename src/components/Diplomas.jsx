import React from 'react';
import Card from 'react-bootstrap/Card';

function Formations() {
  return (
    <section className="section">
      <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
        <Card.Body>
          <Card.Title>Elève ingénieur en 4éme année d'ingénierie informatique et réseau.</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">EMSI</Card.Subtitle>
          <Card.Text>2019 - en cours
          </Card.Text>

        </Card.Body>
      </Card>

      
      <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
        <Card.Body>
          <Card.Title>Baccalauréat sciences Physique-Chimie</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> Lycée La sagesse</Card.Subtitle>
          <Card.Text>2018
          </Card.Text>

        </Card.Body>
      </Card>
    </section>
  );
}

export default Formations;