import React from "react";
import { Link } from "react-router-dom";

function ProductCard({id, imgBackSrc, imgFrontSrc, title, price, actualPrice ,rating}) {
  const renderRating = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="las la-star"></i>);
    }
    return stars;
  };

  return (
    <div class="card product-card">
      <button
        class="btn-wishlist btn-sm"
        type="button"
        data-toggle="tooltip"
        data-placement="left"
        title="Add to wishlist"
      >
        <i class="lar la-heart"></i>
      </button>
      <Link class="card-img-hover d-block" to="/product-left-image">
        <img class="card-img-top card-img-back" src={imgBackSrc} alt="..." />
        <img class="card-img-top card-img-front" src={imgFrontSrc} alt="..." />
      </Link>
      <div class="card-info">
        <div class="card-body">
          <div class="product-title">
            <Link class="link-title" to="/product-left-image">
              {title}
            </Link>
          </div>
          <div class="mt-1">
            <span class="product-price">
              <del class="text-muted pr-1">${actualPrice}</del>
              ${price}
            </span>
            <div class="star-rating">
              {renderRating()}
            </div>
          </div>
        </div>
        <div class="card-footer bg-transparent border-0" style={{border: 'none'}}>
          <div class="product-link d-flex align-items-center justify-content-center">
            <button
              class="btn btn-compare"
              data-toggle="tooltip"
              data-placement="top"
              title="Compare"
              type="button"
            >
              <i class="las la-random"></i>
            </button>
            <button
              class="btn-cart btn btn-primary btn-animated mx-3"
              type="button"
            >
              <i class="las la-shopping-cart mr-1"></i>
            </button>
            <button
              class="btn btn-view"
              data-toggle="tooltip"
              data-placement="top"
              title="Quick View"
            >
              <span data-target="#quick-view" data-toggle="modal">
                <i class="las la-eye"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
