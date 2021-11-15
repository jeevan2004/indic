import React from 'react';
import {FaAngleLeft} from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-box">
                            <h3>About</h3>
                            <ul className="link-list">
                                <li><i><FaAngleLeft/></i> About Indice</li>
                                <li><i><FaAngleLeft/></i> Careers</li>
                                <li><i><FaAngleLeft/></i> Recent News</li>
                                <li><i><FaAngleLeft/></i> Investor Relations</li>
                                <li><i><FaAngleLeft/></i> Content Guidelines</li>
                                <li><i><FaAngleLeft/></i> Terms of Service</li>
                                <li><i><FaAngleLeft/></i> Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-box">
                            <h3>Discover</h3>
                            <ul className="link-list">
                                <li><i><FaAngleLeft/></i> Project Cost Guides</li>
                                <li><i><FaAngleLeft/></i> Upcoming Events</li>
                                <li><i><FaAngleLeft/></i> Mobile App</li>
                                <li><i><FaAngleLeft/></i> Customer Support</li>
                                <li><i><FaAngleLeft/></i> Developers</li>
                                <li><i><FaAngleLeft/></i> Collections</li>
                                <li><i><FaAngleLeft/></i> Our Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-box">
                            <h3>Business With Indice</h3>
                            <ul className="link-list">
                                <li><i><FaAngleLeft/></i> Claim your Business</li>
                                <li><i><FaAngleLeft/></i> Advertise on Indice</li>
                                <li><i><FaAngleLeft/></i> Restaurant Owners</li>
                                <li><i><FaAngleLeft/></i> Business Success Stories</li>
                                <li><i><FaAngleLeft/></i> Business Support</li>
                                <li><i><FaAngleLeft/></i> Blog for Business</li>
                                <li><i><FaAngleLeft/></i> Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-box">
                            <h3>Language</h3>
                           <div className="language-switch">
                               <select>
                                   <option>English</option>
                                   <option>Spanish</option>
                                   <option>Russian</option>
                                   <option>Hindi</option>
                               </select>
                           </div>
                           <h3>Countries</h3>
                           <div className="country-switch">
                               <select>
                                   <option>United State</option>
                                   <option>Canada</option>
                                   <option>France</option>
                                   <option>India</option>
                               </select>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <p>Copyright @2021 <span>Indice</span> is Proudly Crafted by <span>EnvyTheme</span></p>
                </div>
            </div>
           <div className="footer-img">
               <img src={require("../../assets/footer-image.png").default} alt="" />
           </div>
        </div>
    )
}

export default Footer
