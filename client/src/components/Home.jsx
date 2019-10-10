import React, { Component } from 'react';
import '../stylesheets/Home.css';
import { Container, Jumbotron, CardDeck, Card, Button } from 'react-bootstrap';

class Home extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Container id="homeContent" fluid>
        <Jumbotron fluid>
          <Container>
            <h1>Welcome to DM3D!</h1>
            <p>
              DM3D is an app for 3d printing Dungeons & Dragons dungeon masters to organize character, enemy, and terrain models for their campaigns and encounters.
            </p>

          </Container>
          </Jumbotron>
          <CardDeck className="justify-content-center">
              <Card style={{ width: '33rem' }}>
                <Card.Img variant="top" src="../default.jpg" />
                <Card.Body>
                  <Card.Title>Create and search campaigns!</Card.Title>
                  <Card.Text>
                    Create or search for a campaign you'd like to play with your friends. Popular D&D content and homebrew content welcome.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '33rem' }}>
                <Card.Img variant="top" src="../default.jpg" />
                <Card.Body>
                  <Card.Title>Encounter Builder</Card.Title>
                  <Card.Text>
                    Build encounters for your players to organize what terrain models, props and scatter terrain you'll need.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '33rem' }}>
                <Card.Img variant="top" src="../default.jpg" />
                <Card.Body>
                  <Card.Title>Invite your players!</Card.Title>
                  <Card.Text>
                    Invite your players to join your campaign to choose a model for their very own D&D player character!
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }

}

export default Home;
