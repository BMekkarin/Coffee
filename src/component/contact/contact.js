import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact() {
  return (
    <>
      <div className='mt-5'>
        <h1 style={{textAlign:"center", marginBottom:"50px",marginTop:"150px"}}>Contact Us</h1>
        <Form>
        <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>

      <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control  as="textarea" placeholder="Description" rows={3} />
      </Form.Group>
        </Form>
      </div>

    </>
  );
}
export default Contact;
