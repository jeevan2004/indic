import React from 'react';
import {FaRegCalendarAlt, FaLongArrowAltRight} from "react-icons/fa";

const BlogArea = () => {
    return (
        <div className="blog-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="blog-list-item">
                            <h2>Indice Recent Activities</h2>
                            <div className="row">
                                <div className="col-lg-6 col-d-6">
                                    <div className="single-blog-box">
                                        <div className="blog-box-img">
                                            <img src={require("../../assets/blog1.jpg").default} alt="" />
                                        </div>
                                        <div className="blog-box-content">
                                            <ul>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <img src={require("../../assets/user1.jpg").default} alt="" />
                                                        <span>Taylor</span>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center"><i><FaRegCalendarAlt/></i>
                                               <span> Aug 7, 2020</span></li>
                                            </ul>
                                            <h3>
                                                <a href="/">10 Types of Social Proof and What Makes Them Effective</a>
                                            </h3>
                                            <a href="/" className="link-btn"><FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-d-6">
                                    <div className="single-blog-box">
                                        <div className="blog-box-img">
                                            <img src={require("../../assets/blog2.jpg").default} alt="" />
                                        </div>
                                        <div className="blog-box-content">
                                            <ul>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <img src={require("../../assets/user2.jpg").default} alt="" />
                                                        <span>Sarah</span>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center"><i><FaRegCalendarAlt/></i>
                                               <span> Aug 6, 2020</span></li>
                                            </ul>
                                            <h3>
                                                <a href="/">Tech Products That Make It Easier to Stay Home</a>
                                            </h3>
                                            <a href="/" className="link-btn"><FaLongArrowAltRight/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="event-item-list">
                            <h2>Upcoming Events</h2>
                            <div className="single-event-item">
                                <span className="meta">
                                    <i><FaRegCalendarAlt/></i>
                                    <span> Thu, Jul 30, 11:30 am - 10:00 pm</span>
                                </span>
                                <h3>
                                    <a href="/">International Agriculture and Technology Summit</a>
                                </h3>
                                <a href="/" className="link-btn"><FaLongArrowAltRight/></a>
                            </div>
                            <div className="single-event-item">
                                <span className="meta">
                                    <i><FaRegCalendarAlt/></i>
                                    <span> Thu, Jul 30, 11:30 am - 10:00 pm</span>
                                </span>
                                <h3>
                                    <a href="/">Digital Marketing: Customer Engagement & Social Media</a>
                                </h3>
                                <a href="/" className="link-btn"><FaLongArrowAltRight/></a>
                            </div>
                            <div className="single-event-item">
                                <span className="meta">
                                    <i><FaRegCalendarAlt/></i>
                                    <span> Thu, Jul 30, 11:30 am - 10:00 pm</span>
                                </span>
                                <h3>
                                    <a href="/">Internet of Things Forum Africa Exhibition (IOTFA)</a>
                                </h3>
                                <a href="/" className="link-btn"><FaLongArrowAltRight/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogArea
