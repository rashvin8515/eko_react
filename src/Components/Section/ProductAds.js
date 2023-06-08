import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

const ProductAd = ({ imageSrc, title, subTitle, discount }) => {
  return (
    <Col lg="6" className="mt-5 mt-lg-0">
      <Card className="position-relative rounded overflow-hidden">
        {/* Background */}
        <img className="img-fluid hover-zoom" src={imageSrc} alt="" />
        {/* Body */}
        <CardBody className="position-absolute top-50 pl-5">
          <h6 className="text-dark">{title}</h6>
          {/* Heading */}
          <h3>
            {subTitle}
            <br />
            {discount && <span className="text-primary font-w-7">Off {discount}%</span>}
          </h3>
          {/* Link */}
          <a className="btn btn-sm btn-primary btn-animated" href="#">
            Shop Now
          </a>
        </CardBody>
      </Card>
    </Col>
  );
};

const ProductAds = () => {
  return (
    <section className="p-0">
      <Container fluid>
        <Row>
          <ProductAd
            imageSrc="assets/images/product-ad/01.jpg"
            title="Woman Party Collection"
            subTitle="#Trendy Arrived Item"
            discount={50}
          />
          <ProductAd
            imageSrc="assets/images/product-ad/07.jpg"
            title="2020 Collection"
            subTitle="New Stylish Trend Running Shoe"
          />
        </Row>
      </Container>
    </section>
  );
};

export default ProductAds;
