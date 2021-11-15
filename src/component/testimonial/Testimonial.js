import React from 'react'
import Slider from "react-slick";
import { FaRegStar } from "react-icons/fa";

const Testimonial = () => {

    const data = [
        { id: 1,
          author_img: require("../../assets/user2.jpg").default,
          author_name: "Sarah Taylor",
          author_profession:"Hotel Owner",
        },
        { id: 2,
            author_img: require("../../assets/user3.jpg").default,
          author_name: "Alex Hales",
          author_profession:"Developer",
          },
          { id: 3,
                author_img: require("../../assets/user1.jpg").default,
            author_name: "Jhon Smith",
          author_profession:"Restaurant Owner",
          },
          { id: 4,
            author_img: require("../../assets/user4.jpg").default,
            author_name: "Andy James",
          author_profession:"Traveler",
          }
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
        <div className="testimonial">
             <div className="container">
                <Slider {...settings}>
                {data.map((user) => (
                <div  className="testimonial-single-slide">
                    <div className="testimonial-single-box">
                   <div className="rating">
                   <FaRegStar/>
                   <FaRegStar/>
                   <FaRegStar/>
                   <FaRegStar/>
                   </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus viverra maecenas accumsan.</p>
                    <div className="testimonial-info">
                        <img src={user.author_img} alt="" />
                        <div className="title">
                            <h3>{user.author_name}</h3>
                            <span>{user.author_profession}</span>
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

export default Testimonial
