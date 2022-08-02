import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg';
import SubmissionForm from './submission';

const FooterCOmponent = () => {
    return (
      <footer className="bg-dark">
        <Row className="container-fluid mt-5">
          <Col xs={12} md={4} lg={3}>
            <div className="p-3">
              <img src={logo} style={{ maxWidth: "  70px" }} />
              <p className="text-light">
                This is a one of the best higher institution that guarantee
                teaching and training of students
              </p>
            </div>
          </Col>

          <Col xs={12} md={4} lg={3}>
            <div className="p-3">
              <h3>About US</h3>
              <p className="text-light">
                 This University, which took off with academic
                programmes in Arts, Science and Medicine, is now a comprehensive
                citadel of learning with academic programmes in sixteen
                Faculties.
              </p>
            </div>
          </Col>

          <Col xs={12} md={4} lg={3}>
            <div className="p-3">
              <h3>Contact Us</h3>

              <p className="text-light">
                You can reach out to us through:
                <p>school@school.com</p>
              </p>
            </div>
          </Col>

          <Col xs={12} md={4} lg={3}>
            <div className="p-3">
              <h3 className="text-light">Subscription</h3>
              <SubmissionForm />
            </div>
          </Col>
        </Row>
      </footer>
    );
}
 
export default FooterCOmponent;