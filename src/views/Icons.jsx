import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { CardSubtitle, CardText, CardLink, Button, CardTitle } from 'reactstrap';
import NavBar from "../components/Navbar";

class Icons extends React.Component {
  state={
    cards: ['White Collar Crime','Property Crime','Violent Crime','Property Crime','Public Order Crime','White Collar Crime']
  }
  render() {
    const renderCard=this.state.cards.map(i=>{
      return(
        <Col xs="12">
          <Card>
              <CardHeader> {i} </CardHeader>
              <CardBody>
                  <CardTitle>Special title treatment</CardTitle>
                  <CardText>Six persons arrested for attacking and abusing journalists and Oshiwara. Six persons arrested for attacking and abusing journalists and Oshiwara
                  Six persons arrested for attacking and abusing journalists and Oshiwara. Six persons arrested for attacking and abusing journalists and Oshiwara
                  </CardText>
                  <Button href="/#" color="primary">Read More</Button>
              </CardBody>
          </Card>
        </Col>
      )
    })
    return (
      <>
      <NavBar />
        <div className="content">
          <Row>
            {renderCard}
          </Row>
        </div>
      </>
    );
  }
}

export default Icons;
