import React from 'react'
import Page_Heading from '../Components/PageHeading/PageHeading'
import SideBar from '../Components/Sidebar/SideBar';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  Container,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import CustomPagination from '../Components/pagination';
import ProductCardList from '../Components/PrductCardList';
function PLNS() {
  const firstBreadcrumb = { label: "Pages" };
  const secondBreadcrumb = {
    label: "Shop List No Sidebar",
    active: true,
  };
  const [selectedOption, setSelectedOption] = useState("1");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setActivePage(1);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allProducts = useSelector((state) => state.products.allProducts);

  // const filteredProducts = useSelector(
  //   (state) => state.products.filteredProducts
  // );
  const filteredProducts = useSelector((state) => {
    const option = parseInt(selectedOption);
    switch (option) {
      case 1: // Newest Item
        return state.products.allProducts;
      case 2: // High To Low
        return state.products.allProducts.slice().sort((a, b) => b.price - a.price);
      case 3: // Low To High
        return state.products.allProducts.slice().sort((a, b) => a.price - b.price);
      default:
        return state.products.allProducts;
    }
  });
  const filters = useSelector((state) => state.products.filters);


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 9;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const startIndex = (activePage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);
  const handleAddToCart = (product) => {
    const size = product.size[0];
    const color = product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: 1,
    };
    console.log(productToAdd);

    dispatch(addToCart(productToAdd));
  };
  const handleAddToWishList = (product) => {
    const size = product.size[0];
    const color = product.colors[0];

    const productToAdd = {
      ...product,
      size,
      colors: color,
      quantity: 1,
    };

    dispatch(addToWishList(productToAdd));
  };
  return (
    <div className='page-wrapper'>
      <Page_Heading
        title="Shop List No Sidebar"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className='page-content'>
        <section>
          <Container>
            <Row className="align-items-center">
              <Col md="5" className="mb-3 mb-md-0">
                <CardText tag="span" className="text-muted">
                  Showing 1 to {productsToShow.length} of
                  {" "}{filteredProducts.length}
                </CardText>
              </Col>
              <Col
                md="7"
                className="d-flex align-items-center justify-content-md-end"
              >
                <div className="view-filter">
                  <Link
                    to="/shop-grid-left-sidebar"
                    className="active me-2 text-primary"
                  >
                    <i class="lab la-buromobelexperte"></i>
                  </Link>
                  <Link to="/shop-grid-left-sidebar" className="text-dark">
                    <i class="las la-list"></i>
                  </Link>
                </div>
                <div className="sort-filter ml-2 d-flex align-items-center">
                  <select class="custom-select" id="inputGroupSelect02" onChange={handleOptionChange} value={selectedOption}>
                    <option selected>Sort By</option>
                    <option value="1">Newest Item</option>
                    <option value="2">High To Low</option>
                    <option value="3">Low To High</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Col>

              {productsToShow.map((product) => (
                <ProductCardList
                  id={product.id}
                  imgBackSrc={`assets/images/${product.pictures[0]}`}
                  imgFrontSrc={`assets/images/${product.pictures[1]}`}
                  title={product.name}
                  price={product.salePrice}
                  actualPrice={product.price}
                  rating={product.rating}

                />
              ))}
            </Col>

            <Row
              className="mt-5 mb-5"
              style={{ justifyContent: "center" }}
            >
              <CustomPagination
                activePage={activePage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </Row>
          </Container>
        </section>
      </div>
    </div>
  )
}

export default PLNS;