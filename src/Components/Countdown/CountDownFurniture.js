import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card, CardBody, CardFooter, Button } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductCard from '../ProductCard';

function CountDownFurniture() {
    const products = useSelector((state) => state.products.allProducts);
  const furnitureProducts = products.filter((product) => product.category === "Furniture").slice(4, 8);
  
  const owlOptions = {
    dots: false,
    nav: true,
    items: 2,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 2
      }
    }
  };
  return (
    <div>
        <section>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={5} className='mr-auto'>
                    <div className="shadow p-5">
              <div>
                <h6 className="text-primary mb-1">— Limited Offer</h6>
                <h2 className="mb-0">Exclusive Hot Deal Ends Soon!</h2>
              </div>
              <ul className="countdown list-inline d-flex my-5" data-countdown="2020/08/23"></ul>
              <div className="subscribe-form">
                <form id="mc-form" className="row align-items-center no-gutters mb-3">
                  <div className="col">
                    <input
                      value=""
                      name="EMAIL"
                      className="email form-control input-2 bg-white"
                      id="mc-email"
                      placeholder="Email Address"
                      required=""
                      type="email"
                    />
                  </div>
                  <div className="col-auto">
                    <input className="btn btn-primary overflow-auto" name="subscribe" value="Subscribe" type="submit" />
                  </div>
                </form>
                <small>Get started for 1 Month free trial No Purchase required.</small>
              </div>
            </div>
                    </Col>
                    <Col lg={6} className="mt-5 mt-lg-0">
                        <OwlCarousel className="owl-carousel no-pb owl-2" {...owlOptions}>
                        {furnitureProducts.map((product) => (
                            <div className="item" key={product.id}>
                            <Card className="product-card">
                                {/* ... */}
                                <ProductCard
                                    id={product.id}
                                    imgBackSrc={`assets/images/${product.pictures[0]}`}
                                    imgFrontSrc={`assets/images/${product.pictures[1]}`}
                                    title={product.name}
                                    price={product.salePrice}
                                    actualPrice={product.price}
                                    rating={product.rating}
                                />
                            </Card>
                            </div>
                        ))}
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default CountDownFurniture