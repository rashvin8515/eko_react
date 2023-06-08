import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenuNavBar from "./DropDownMenuNavBar";
import ShopDropdown from "./DropDownMenuBarTable";
import CatalogDropDown from "./CatalogDropDown";
import { Col, Container, Row } from "reactstrap";

export default function HeaderNavBar() {
  const homeLinks = [
    { url: "/", label: "Home - Fashion 1" },
    { url: "/index2", label: "Home - Fashion 2" },
    { url: "/index3", label: "Home - Fashion 3" },
    { url: "/index4", label: "Home - Electronic" },
    { url: "/index5", label: "Home - Furniture" },
    { url: "/index6", label: "Home - Kids" },
  ];

  const catagoryLinks = [
    {
      title: "Clothing",
      links: [
        { title: "All Clothing", url: "/shop-grid-left-sidebar" },
        { title: "Top T-Shirts & Shirts", url: "/shop-grid-left-sidebar" },
        { title: "Lingerie & Sleepwear", url: "/shop-grid-left-sidebar" },
        { title: "Leggings & Jeggings", url: "/shop-grid-left-sidebar" },
        { title: "Kurtas & Kurtis", url: "/shop-grid-left-sidebar" },
        { title: "Dresses & Skirts", url: "/shop-grid-left-sidebar" },
        { title: "Jumpers & Cardigans", url: "/shop-grid-left-sidebar" },
      ],
    },
    {
      title: "Shoes & Boots",
      links: [
        {
          title: "All Shoes & Boots",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Branded Shoes",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Boots",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Heels",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Sandals",
          url: "/shop-grid-left-sidebar",
        },
        {
          label: "Shoes",
          url: "/shop-grid-left-sidebar",
        },
        {
          label: "Wide Fit Shoes",
          url: "/shop-grid-left-sidebar",
        },
      ],
    },
    {
      title: "Bags & Accessories",
      links: [
        {
          title: "All Bags & Accessories",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Accessories",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Bags & Purses",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Shoulder Bags",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Skin Care",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Hair Accessories",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Artificial Jewellery",
          url: "/shop-grid-left-sidebar",
        },
      ],
    },
    {
      title: "Collections",
      links: [
        {
          title: "All Collections",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Winter & Seasonal Wear",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Beauty & Grooming",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Ballerinas",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Party Dresses",
          url: "/shop-grid-left-sidebar",
        },
        {
          title: "Ethnic Wear",
          url: "/shop-grid-left-sidebar",
        },
      ],
    },
  ];
  const [shopLinks, setShopLinks] = useState([
    {
      title: "Shop Layout",
      links: [
        { title: "Shop Grid - Left Sidebar", url: "/shop-grid-left-sidebar" },
        { title: "Shop Grid - Right Sidebar", url: "/shop-grid-right-sidebar" },
        { title: "Shop Grid - No Sidebar", url: "/shop-grid-no-sidebar" },
        { title: "Shop Grid - Full Width", url: "/shop-grid-fullwidth" },
        { title: "Shop List - Left Sidebar", url: "/shop-list-left-sidebar" },
        { title: "Shop List - Right Sidebar", url: "/shop-list-right-sidebar" },
        { title: "Shop List - No Sidebar", url: "/shop-list-no-sidebar" },
        { title: "Shop List - Full Width", url: "/shop-list-fullwidth" },
      ],
    },
    {
      title: "Product Pages",
      links: [
        { title: "Product Left Image", url: "/product-left-image" },
        { title: "Product Right Image", url: "/product-right-image" },
        { title: "Product Cart", url: "/product-cart" },
        { title: "Product Checkout", url: "/product-checkout" },
        { title: "Order Completed", url: "/order-complete" },
      ],
    },
  ]);

  const pagesLinks = [
    { label: "About", url: "/about-us" },
    { label: "FAQ", url: "/faq" },
    { label: "Login", url: "/login" },
    { label: "Login 2", url: "/login-2" },
    { label: "Sign Up", url: "/signup" },
    { label: "Coming Soon", url: "/coming-soon" },
    { label: "404", url: "/error-404" },
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Term & Conditions", url: "/terms-and-conditions" },
  ];

  const blogLinks = [
    { label: "Blog Card", url: "/blog-card" },
    { label: "Blog Listing 1", url: "/blog-listing" },
    { label: "Blog Listing 2", url: "/blog-listing-2" },
    { label: "Blog Single", url: "/blog-single" },
  ];

  return (
    <>
      <div id="header-wrap" class="shadow-sm">
        <Container class="container">
          <Row>
            {/* <!--menu start--> */}
            <Col>
              <nav class="navbar navbar-expand-lg navbar-light position-static">
                <a class="navbar-brand logo d-lg-none" href="index.html">
                  <img class="img-fluid" src="assets/images/logo.png" alt="" />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <DropdownMenuNavBar title={"Home"} links={homeLinks} />

                    <CatalogDropDown
                      title={"Catalog"}
                      catagoryLinks={catagoryLinks}
                    />

                    <ShopDropdown title={"shop"} shopLinks={shopLinks} />

                    <DropdownMenuNavBar title={"Pages"} links={pagesLinks} />

                    <DropdownMenuNavBar title={"Blog"} links={blogLinks} />

                    <li class="nav-item">
                      <Link to="/contact-us" class="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="right-nav align-items-center d-flex justify-content-end">
                  <a class="mr-1 mr-sm-3" href="#">
                    <i class="las la-user-alt"></i>
                  </a>
                  <a class="mr-3 d-none d-sm-inline" href="#">
                    <i class="lar la-heart"></i>
                  </a>
                  <div>
                    <a
                      class="d-flex align-items-center"
                      href="#"
                      id="header-cart-btn"
                      data-toggle="modal"
                      data-target="#cartModal"
                    >
                      <span
                        class="bg-white px-2 py-1 shadow-sm rounded"
                        data-cart-items="2"
                      >
                        <i class="las la-shopping-cart"></i>
                      </span>
                      <div class="ml-4 d-none d-md-block">
                        <small class="d-block text-muted">My Cart</small>
                        <span class="text-dark">2 Items - $52</span>
                      </div>
                    </a>
                  </div>
                </div>
              </nav>
            </Col>
            {/* <!--menu end--> */}
          </Row>
        </Container>
      </div>
    </>
  );
}
