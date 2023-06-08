import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Row ,Col} from 'reactstrap'

function NewCollection3() {
    const products = useSelector((state) => state.products.allProducts);
    const ProductItem = ({ product }) => {
        return (
          <div className="media align-items-center mb-4">
            <a className="d-block mr-3" href="product-left-image.html">
              <img className="rounded" src={`assets/images/${product.pictures[0]}`} alt="Product" width="100" />
              
            </a>
            <div className="media-body">
              <div className="product-title">
                <a className="link-title" href="#">{product.name}</a>
              </div>
              <div className="star-rating">
                {[...Array(product.rating)].map((_, index) => (
                  <i key={index} className="las la-star"></i>
                ))}
              </div>
              <span className="product-price">
                <del className="text-muted">${product.price.toFixed(2)}</del> ${product.salePrice.toFixed(2)}
              </span>
            </div>
          </div>
        );
      };
  return (
    <div>
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                    <div className="row">
      <div className="col-lg-4 col-md-6">
        <h5 className="mb-5 font-w-5"><span className="text-primary">—</span> New Arrived</h5>
        {products.slice(0, 4).map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
      <div className="col-lg-4 col-md-6 mt-8 mt-md-0">
        <h5 className="mb-5 font-w-5"><span className="text-primary">—</span> Best Seller</h5>
        {products.filter((product) => product.rating === 5).slice(0, 4).map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
      <div className="col-lg-4 col-md-6 mt-8 mt-lg-0">
        <h5 className="mb-5 font-w-5"><span className="text-primary">—</span> Featured Item</h5>
        {products.filter((product) => product.stock > 25).slice(0, 4).map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
      </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default NewCollection3