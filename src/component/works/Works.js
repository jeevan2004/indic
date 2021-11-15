import React from 'react'
import { FaMapMarkerAlt, FaUserShield,FaCheckCircle } from "react-icons/fa";

const Works = () => {
    return (
        <div className="works">
            <div className="container">
            <div className="text-heading">
                    <h1>How It Works</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-works-box">
                        <div className="icon">
                            <FaMapMarkerAlt/>
                        </div>
                        <h3>Contact a Few Owners</h3>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-works-box">
                        <div className="icon">
                            <FaUserShield/>
                        </div>
                        <h3>Make a Reservation</h3>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-works-box last-box">
                        <div className="icon">
                            <FaCheckCircle/>
                        </div>
                        <h3>Find Interesting Place</h3>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Works
