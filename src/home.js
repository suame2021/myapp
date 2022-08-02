import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Img4 from "./images/img4.jpg";
import Img5 from "./images/img5.jpg";
import Img6 from "./images/img6.jpg";



const HomeComponent = () => {
    return (
      <div>
        <Container>
          <Row className="container-fluid mt-5">
            <Col xs={12} md={4} lg={3}>
              <div className="p-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Img4} />
                  <Card.Body>
                    <Card.Title>Our Learning Environment</Card.Title>
                    <Card.Text>
                      Our learning environment is one of the best you can see
                      around, it is calm and good for learning
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div className="p-3"></div>
            </Col>

            <Col xs={12} md={4} lg={3}>
              <div className="p-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Img5} />
                  <Card.Body>
                    <Card.Title>Our Students</Card.Title>
                    <Card.Text>
                      We have the best sets of students in our school that are
                      outstanding in their respective career choice.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div className="p-3"></div>
            </Col>

            <Col xs={12} md={4} lg={3}>
              <div className="p-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Img6} />
                  <Card.Body>
                    <Card.Title>Our Campus</Card.Title>
                    <Card.Text>
                      Our Campus is located in the most condusive environment in
                      the contries that is good for learnig
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div className="p-3"></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
 
export default HomeComponent;