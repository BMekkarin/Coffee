import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./product.css";
import imgcoffee from "../../asset/coffee.jpg";
import imgLate from "../../asset/late.jpg";
import imgMocha from "../../asset/mocha.jpg";
import imgAmerica from "../../asset/america.jpg";
import CardGroup from "react-bootstrap/CardGroup";
function Product() {
  return (
    <>
    <div style={{marginTop:"100px"}}>\
      <h1 style={{textAlign:"center",marginBottom:"50px"}}>สินค้าตัวอย่าง</h1>
      <CardGroup>
        <Row>
          <Col xs={12} md={6} lg ={3}>
            <Card className="h-100">
              <Card.Img className="img" variant="top" src={imgLate} />
              <Card.Body>
                <Card.Title>ลาเต้</Card.Title>
                <Card.Text>
                  ลาเต้ กาแฟนมหลากสไตล์หอมกรุ่นพร้อมเปิดร้านกาแฟลาเต้
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg ={3}>
            <Card className="h-100">
              <Card.Img className="img" variant="top" src={imgcoffee} />
              <Card.Body>
                <Card.Title>เอสเปรสโซ</Card.Title>
                <Card.Text>
                  กาแฟที่มีการสกัดออกมาในปริมาณต่อแก้วค่อนข้างน้อย (15-60
                  มล.)โดยใช้แรงดันสูงดันน้ำที่กำลังเดือดผ่านผงกาแฟเอสเพรสโซอย่างรวดเร็ว(20-30วินาที)
                  และรุนแรง ตามหลักพลศาสตร์ (Dynamics)
                  เพื่อสกัดน้ำมันและส่วนประกอบของอโรมาออกมาจนได้น้ำกาแฟที่เข้มข้น
                  ไร้การปรุงแต่งเพิ่ม
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img className="img" variant="top" src={imgMocha} />
              <Card.Body>
                <Card.Title>มอคค่า</Card.Title>
                <Card.Text>
                  กาแฟมอคค่า กาแฟที่มีรสชาติหวานจากช็อกโกแลตและนม
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img className="img" variant="top" src={imgAmerica} />
              <Card.Body>
                <Card.Title>อเมริกาโน่</Card.Title>
                <Card.Text>
                  กาแฟอเมริกาโน่ กาแฟที่มีรสชาติเข้มข้นและไม่มีนม
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </div>
      
    </>
  );
}
export default Product;
