import React from 'react';
import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarToggler,Col ,Row, Container} from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function HeroBanner4() {
    const options = {
        items: 1,
        nav: false,
        dots: false,
        autoplay: true,
        loop: true,
        margin: 5
      };
    
      const slides = [
        {
          bgImg: "assets/images/electronic/bg/01.jpg",
          title: "Only This Week",
          subtitle: "25% OFF On Product",
          text: "Latest Stylish",
          text2: "Mackbook"
        },
        {
          bgImg: "assets/images/electronic/bg/02.jpg",
          title: "Only This Week",
          subtitle: "25% OFF On Product",
          text: "New Arrived",
          text2: "Iphone Pro"
        },
      ];
    
  return (
    <div>
        <section className="banner pos-r p-0 mt-5">
  <Container >
    <Row>
    <Col lg={3}>
        <nav class="navbar navbar-expand-lg navbar-light categories d-block shadow-sm">
          <button class="navbar-toggler d-flex align-items-center text-uppercase" type="button" data-toggle="collapse" data-target="#categoriesDropdown" aria-controls="categoriesDropdown" aria-expanded="false" aria-label="Toggle navigation"> <i class="las la-stream"></i>Categories</button>
          <div class="collapse navbar-collapse" id="categoriesDropdown">
            <ul class="navbar-nav d-block w-100">
              <li class="nav-item"> <a class="nav-link" href="#">Men</a>
              </li>
              <li class="nav-item"> <a class="nav-link" href="#">Women</a>
              </li>
              <li class="nav-item"> <a class="nav-link" href="#">Kids</a>
              </li>
              <li class="nav-item"> <a class="nav-link" href="#">Accessories</a>
              </li>
              <li class="nav-item"> <a class="nav-link" href="#">Clothing</a>
              </li>
              <li class="nav-item"> <a class="nav-link" href="#">Bags</a>
              </li>
              <li class="nav-item"> <a class="nav-link" href="#">Footwear</a>
              </li>
              <li class="nav-item"> <a class="nav-link" href="#">Watches</a>
              </li>
              <li class="nav-item"> <a class="nav-link" href="#">Jewellery</a>
              </li>
            </ul>
          </div>
        </nav>
    </Col>
    <Col lg="9">
            <OwlCarousel className="banner-slider owl-carousel no-pb h-100" {...options}>
              {slides.map((slide, index) => (
        <div
          key={index}
          className="item"
          style={{ backgroundImage: `url(${slide.bgImg})`, backgroundSize: 'cover',backgroundPosition: 'center'}}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
            <div class="col py-8 py-lg-0">
            <div class="animated3"> <span class="bg-dark d -inline-block text-white px-2 py-1 mb-0">{slide.title}</span>
            <br />
            <h5 class="bg-primary d-inline-block text-white font-w-7 px-3 py-1">{slide.subtitle}</h5>
          </div>
            <h1 class="mt-4 animated3" >{slide.text}<br/> {slide.text2}</h1>
            </div>
            </div>
          </div>
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

export default HeroBanner4;