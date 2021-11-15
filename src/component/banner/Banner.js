import React from "react";
import { FaSearch, FaMapMarkerAlt, FaList } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-content">
          <h1 className="banner-first-heading">
            <span className="typewrite">Find Nearby </span>
            <div className="typist">
              <span>Shopping</span>
            </div>
          </h1>
          <p>Expolore top-rated attractions, activities and more...</p>

          <div className="banner-content-form">
            <div className="row m-0 align-items-center">
              <div className="col-lg-4 col-md-12 p-0">
                <form className="banner-form">
                  <label>
                    <FaSearch />
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="What are you looking for?"
                  />
                </form>
              </div>
              <div className="col-lg-3 col-md-6 p-0">
              <form className="banner-form">
                  <label>
                    <FaMapMarkerAlt />
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Location"
                  />
                </form>
              </div>
              <div className="col-lg-3 col-md-6 p-0">
              <form className="banner-form banner-categories">
                  <label>
                    <FaList />
                  </label>
                 <select className="banner-form-select">
                    <option>All Categories</option>
                    <option>Restaurants</option>
                    <option>Events</option>
                    <option>Clothing</option>
                    <option>Bank</option>
                    <option>Fitness</option>
                    <option>Bookstore</option>
                    <option>Shopping</option>
                    <option>Hotels</option>
                    <option>Hospitals</option>
                    <option>Culture</option>
                    <option>Beauty</option>
                 </select>
                </form>
              </div>
              <div className="col-lg-2 col-md-12 p-0">
                  <button className="banner-button">Search Now</button>
              </div>
            </div>
          </div>

          <ul className="banner-search">
                <li>Populer:</li>
                <li><a href="/">Restaurants</a></li>
                <li><a href="/">Events</a></li>
                <li><a href="/">Clothing</a></li>
                <li><a href="/">Bank</a></li>
                <li><a href="/">Fitness</a></li>
                <li><a href="/">Bookstore</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
