import "./App.css";
import Index from "./component/index/index";
import Contact from "./component/contact/contact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Swiper from "./component/swipper/swipper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Scroll from "./component/scoll/scoll";
// import { fas } from '@awesome.me/kit-KIT_CODE/icons'
function App() {
  
  return (
    <>
    <Router>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/" >Navbar</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="/a">Home</Nav.Link>
            <Nav.Link href="/a#test" smooth>Contact</Nav.Link>
            <Nav.Link href="/a#swipper" smooth>Swipper</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/a">
          <Index  />
        </Route>
        <Route path="/c">
          <Contact  />
        </Route>
        <Route path="/s">
          <Swiper  />
        </Route>
      </Switch>
      <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
  </Router>
  <div className="scoll">
    <Scroll />
  </div>
  </>
  );
}

export default App;
