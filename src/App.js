import "./App.css";
import Index from "./component/index/index";
import Contact from "./component/contact/contact";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Swiper from "./component/swipper/swipper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scroll from "./component/scoll/scoll";
import Product from "./component/product/product";
// import { fas } from '@awesome.me/kit-KIT_CODE/icons'
function App() {
  return (
    <>
      <Router>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto">
                <Nav.Link href="#test" smooth>
                  Contact
                </Nav.Link>
                <Nav.Link href="#swipper" smooth>
                  Swipper
                </Nav.Link>
                <Nav.Link href="#product" smooth>
                  Product
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/">
            <Index />
          </Route>
          <Route path="/c">
            <Contact />
          </Route>
          <Route path="/s">
            <Swiper />
          </Route>
          <Route path="/product">
            <Product />
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
