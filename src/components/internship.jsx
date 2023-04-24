import React from 'react';
import Card from 'react-bootstrap/Card';


function Formations() {
    return (
        <section className="section">
             <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
                <Card.Body>
                    <Card.Title>Stage</Card.Title>
                    <Card.Text><strong>Lieu : </strong> Marrakech
                    </Card.Text>
                    <Card.Text><strong>Nom de l'entreprise ou organisation : </strong> Vision UP
                    </Card.Text>
                    <Card.Text><strong>Date : </strong> Juillet 2022 - Aout 2022
                    </Card.Text>
                    <Card.Text><strong>Mission : </strong> La réalisation d'une application Web qui permet la gestion des taches au sein d'une Startup.
                    </Card.Text>

                </Card.Body>
            </Card>

            

           

        </section>
    );
}

export default Formations;