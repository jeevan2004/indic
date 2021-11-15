import React from "react";
import { FaSearch, FaRegUserCircle, FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header class="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={require("../../assets/logo.png").default} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="navbar-search">
              <label>
                <FaSearch />
              </label>
              <input
                className="input-search"
                type="text"
                placeholder="What are you looking for?"
              />
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div class="dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    id="dropdownMenuLink"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="/">
                        Home Demo - 1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Home Demo - 2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Home Demo - 3
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Home Demo - 4
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <div class="dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    id="dropdownMenuLink"
                    aria-expanded="false"
                  >
                    Listing
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="/">
                        List Layout
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Grid Layout
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Listing Details
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Top Place
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Categories
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Other Profiles
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <div class="dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    id="dropdownMenuLink"
                    aria-expanded="false"
                  >
                    User Panel
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="/">
                        DashBord
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Messages
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Bookings
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Wallet
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        My Listings
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Bookmarks
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Add Listing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Invoice
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div class="dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    id="dropdownMenuLink"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="/">
                        Products List
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Cart
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Products Details
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <div class="dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    id="dropdownMenuLink"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="/">
                        Grid (2 in row)
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Grid (3 in row)
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Grid (full width)
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Single Post
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div class="dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    id="dropdownMenuLink"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="/">
                        About US
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        How Its Works
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Events
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        404 Error
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Comming Soon
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="optional-menu">
              <div className="login-menu">
                <span >
                  <FaRegUserCircle />
                </span>
                <span className="ms-2">Login / Register</span>
              </div>
              <div className="button-menu">
                <a href="/" role="button"><span>
                  <FaPlus />
                </span>
                <span className="ms-2">Add Listing</span></a>
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
