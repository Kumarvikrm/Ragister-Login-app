import { useState } from "react";
import { Col, Container, Row, Button, Form} from "react-bootstrap";
import swal from 'sweetalert';


function Ragister() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


let SubmitDetails=()=>{
  let data = {
    userName,email,password
  };
  console.log(userName)
  console.log(email)
  console.log(password)

  fetch("https://gorest.co.in/public-api/users", {
    method : "POST",
    headers : {
      "Content-type" : "application/json",
      Accept : "application/json",
      Authorization : "Bearer 39f6205307a4aa3b8768b09a9a497751105986fc385362f8c02fe3cd23f6bde7"
    },
    body : JSON.stringify(data)

  })
  .then((response) => {
    return response.json()
  })
  .then((response)=>{
    console.log(response)
    if (response.status.code === 200){
      swal("Good job!", "You clicked the button!", "success");
    };
    if (response.error){
      swal("Opps!", response.error.message, "success");
    };

  })
  .catch((error)=>{
    console.log(error)
  });
}



  return (
    <div>
      <Container className="mt-5 ">
        <Row>
          <Col xs={{ offset: 4, span: 5 }}>
          <h1 className="text-center mb-5"> Form Details </h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <label>UserName</label>
                <input type="text" className="form-control" autoFocus value={userName} placeholder="UserName"  onChange={(e)=> setUserName(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3"  controlId="formBasicEmail">
                <label>Email address</label>
                <input type="email" className="form-control" value={email} placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <label>Password</label>
                <input type="password" className="form-control" value={password} placeholder="Password"  onChange={(e)=> setPassword(e.target.value)}/>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" size="md" onClick={()=> SubmitDetails()}>
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

export default Ragister;