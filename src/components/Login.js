import { useState } from "react";
import { Col, Container, Row, Button, Form} from "react-bootstrap";

function Login() {
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


let SubmitDetails=()=>{
  console.log("Hello Vikram")
}



  return (
    <div>
      <h1 className=""> Form Details </h1>
      <Container className="mt-4 ">
        <Row>
          <Col xs={{ offset: 3, span: 3 }}>
            <Form>
              <Form.Group className="mb-3"  controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} placeholder="Password" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" size="md" onClick={SubmitDetails()}>
                  Save
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;