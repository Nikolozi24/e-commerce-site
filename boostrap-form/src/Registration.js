import Form from "react-bootstrap/Form";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";


import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";

function Register() {
  return (
    <>
      <Container as={"div"} className="p-4 bg-sky-500  w-full border-2  shadow-md  my-10">
        {true && (
          <Form className="my-10 mx-11 bg-sky-400">
            <legend className="text-center">Registration</legend>

            {/* rules */}
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>rule #1 </Accordion.Header>
                <Accordion.Body style={{ color: "red" }}>
                  please fill all inputs Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>rule #2 </Accordion.Header>
                <Accordion.Body>
                  please fill all inputs Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Row xs="2" style={{ display: "flex" }}>
              <Form.Group className="mb-3" controlId="formPassword">
                <br />
                <Col>
                  <Row>
                    <Col>
                      <FloatingLabel label="First Name">
                        <Form.Control type="text" placeholder="first name" />
                      </FloatingLabel>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>

              <Form.Group className="mb-3 mt-4" controlId="formPassword">
                <Col>
                  <Row>
                    <Col>
                      <FloatingLabel label="last Name">
                        <Form.Control type="text" placeholder="last name" />
                      </FloatingLabel>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group>
                <FloatingLabel label="Email">
                  <Form.Control type="text" placeholder="email" />
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row xs="3" className="mt-2">
              {/* this section used for choose  gender */}
              <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Col>
                  <Form.Check
                    id="Male"
                    type="radio"
                    name="gender"
                    label="Male"
                  />
                </Col>
                <Col>
                  <Form.Check
                    id="Female"
                    type="radio"
                    name="gender"
                    label="Female"
                  />
                </Col>
                <Col>
                  <Form.Check
                    id="other"
                    type="radio"
                    name="gender"
                    label="Other"
                  />
                </Col>
              </Form.Group>
            </Row>

            <Row xs="2">
            <Form.Group>

            <Form.Label>
                choose University
            </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>უნივერსიტეტები</option>
                <option value="1">TSU</option>
                <option value="2">KIU</option>
                <option value="3">ILIA</option>
              </Form.Select>
            </Form.Group>
            </Row>
            <Row>
             <Form.Group>
                <Form.Label> favorite color</Form.Label>
              <Form.Control type="color"/>
             </Form.Group>



            </Row>
            <h7>how much salary do you have?</h7>
            <Row>
                   
                          <InputGroup className="mt-2">
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control type="text"/>
              </InputGroup>


            </Row>
            {/* <Badge className="mt-4 h-20" bg="info" ><h5>Info: you must accept our terms and conditions</h5> </Badge> */}
            <Row xs="4" className="my-2">
                  <Form.Group>
                      <Form.Check type="checkbox" label="I Accept Term and conditions"/>


                  </Form.Group>
            </Row>
            <Row>
                <Form.Group>

              <Form.Label>Send us feedback </Form.Label>
              <Form.Control as="textarea" rows={3}/>

                </Form.Group>

            </Row>
            <Button className="my-3">Submit</Button>
          </Form>

        )}
      </Container>
    </>
  );
}

export default Register;
