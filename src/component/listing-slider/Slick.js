import React from 'react'
import Slider from "react-slick";
import { FaRegHeart, FaList, FaRegSun, FaMapMarkerAlt, FaBookmark, FaRegStar } from "react-icons/fa";

const Slick = () => {
    const data = [
        { id: 1,
          img:  require("../../assets/listings1.jpg").default,
          author_img: require("../../assets/user1.jpg").default,
          heading: "Chipotle Mexican Grill",
          author_name: "Taylor",
          listing_mete1:"Restorent",
          listing_mete2:"New York, USA",
          price:"$150",
        },
        { id: 2,
            img:  require("../../assets/listings2.jpg").default,
            author_img: require("../../assets/user2.jpg").default,
            heading: "The Beverly Hills Hotel",
            author_name: "Sarah",
            listing_mete1:"Beauty",
            listing_mete2:"Suwanee, USA",
            price:"$200",
          },
          { id: 3,
            img:  require("../../assets/listings3.jpg").default,
            author_img: require("../../assets/user3.jpg").default,
            heading: "Central Shopping Center",
            author_name: "James",
            listing_mete1:"Shopping",
            listing_mete2:"Bangkok, Thailand",
            price:"$110",
          },
          { id: 4,
            img:  require("../../assets/listings5.jpg").default,
            author_img: require("../../assets/user4.jpg").default,
            heading: "Indice Beauty Center",
            author_name: "Andy",
            listing_mete1:"Beauty",
            listing_mete2:"New York, USA",
            price:"$100",
          },
      ];
    const settings = {
        arrow: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="listing-slider">
            <div className="container">
            <div className="text-heading">
                    <h1>Trending Listings Right Now</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                </div>
                <Slider {...settings}>
                {data.map((user) => (
                <div  className="single-slide">
                    <div className="slide-box">
                        <div className="single-slide-img">
                            <img src={user.img} alt="" />
                            <a href="/" className="category">
                                <FaList/>
                            </a>
                            <a href="/" className="save">
                                <FaRegHeart/>
                            </a>
                        </div>
                        <div className="listing-content">
                            <div className="author">
                                <div className="d-flex align-items-center">
                                    <img src={user.author_img} alt="" />
                                    <span>{user.author_name}</span>
                                </div>
                            </div>
                            <ul className="listing-meta">
                                <li>
                                    <a href="/">
                                    <i className="meta-icon"><FaRegSun/></i>
                                        {user.listing_mete1}
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                    <i className="meta-icon">  <FaMapMarkerAlt/></i>
                                        {user.listing_mete2}
                                    </a>
                                </li>
                            </ul>
                            <h3>{user.heading}</h3>
                            <span className="button"><i><FaBookmark/></i> Open Now</span>
                            <div className="d-flex justify-content-between align-items-center">
                                    <div className="rating">
                                        <FaRegStar/>
                                        <FaRegStar/>
                                        <FaRegStar/>
                                        <FaRegStar/>
                                        <span>(15)</span>
                                    </div>
                                    <div className="price">
                                        Start from <span>{user.price}</span>
                                    </div>
                            </div>
                        </div>
                        </div>
               </div>
                 ))}
               
                </Slider>
            </div>
        </div>
    )
}

export default Slick
