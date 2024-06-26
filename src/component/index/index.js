import Lottie from "lottie-react";
import animationData from "../../asset/Animation2.json";
import  './index.css';
import Contact from '../contact/contact'
import Swipper from '../swipper/swipper';
import Product from '../product/product';
function Index() {
  return (
    <>
      <div className="row">
        <div className="col-6 bg-info-subtle" style={{textAlign:"center"}}>
          <div className="heads">
          <h1>Cofee Time</h1>
          <p>Enjoy your coffee time with us</p>
          </div>
        </div>
        <div className="col-6 bg-info-subtle">
          <Lottie style={{ height: "800px" }} animationData={animationData} />
        </div>
      </div>
      <div id="swipper">
      <Swipper />
      </div>
      <div id="product">
        <Product />
      </div>
      <div id="test" className="contact">
      <Contact />
      </div>
    </>
  );
}

export default Index;
