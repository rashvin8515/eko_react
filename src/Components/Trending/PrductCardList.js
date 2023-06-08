import React from "react";
import { Link } from "react-router-dom";

function ProductCardList({id, imgBackSrc, imgFrontSrc, title, price, actualPrice ,rating}) {
  const renderRating = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="las la-star"></i>);
    }
    return stars;
  };

  return (
    <div class="card product-card product-list mb-5">
          <div class="row align-items-center">
            <div class="col-lg-4 col-md-5">
              <button class="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i class="lar la-heart"></i>
              </button>
              <a class="card-img-hover d-block" href="#">
                <img class="card-img-top card-img-back"  src={imgFrontSrc} alt="..." />
                <img class="card-img-top card-img-front" src={imgBackSrc} alt="..." />
              </a>
            </div>
            <div class="col-lg-8 col-md-7">
              <div class="card-info">
                <div class="card-body">
                  <div class="product-title"><a class="link-title" href="product-left-image.html">{title}</a>
                  </div>
                  <div class="mt-1"> <span class="product-price"><del class="text-muted">${price}</del> ${actualPrice}</span>
                    <div class="star-rating">
                        {renderRating()}                    </div>
                    </div>
                  <p class="mb-3 mt-2">Curabitur semper varius lectus sed consequat. Nam accumsan dapibus sem, sed lobortis nisi porta vitae</p>
                </div>
                <div class="card-footer bg-transparent border-0">
                  <div class="product-link d-flex align-items-center">
                    <button class="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i class="las la-random"></i> 
                    </button>
                    <button class="btn-cart btn btn-primary btn-animated mx-3" type="button"><i class="las la-shopping-cart mr-1"></i>
                    </button>
                    <button class="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i class="las la-eye"></i></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default ProductCardList;
