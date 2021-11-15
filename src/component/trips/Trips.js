import React from 'react'

const Trips = () => {
    return (
        <div className="trips">
             <div className="container">
            <div className="text-heading">
                    <h1>Destinations for Future Trips</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                </div>
            <div className="row">
         
                      <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="single-trip-box">
                                  <img src={require("../../assets/destinations1.jpg").default} alt="" />
                                  <div className="country">Thailand</div>
                                  <div className="content">
                                      <h3>Bangkok</h3>
                                      <span>
                                          26 Places
                                      </span>
                                  </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="single-trip-box">
                                  <img src={require("../../assets/destinations2.jpg").default} alt="" />
                                  <div className="country">United State</div>
                                  <div className="content">
                                      <h3>New York</h3>
                                      <span>
                                          20 Places
                                      </span>
                                  </div>
                          </div>
                      </div> 
                      <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="single-trip-box">
                                  <img src={require("../../assets/destinations3.jpg").default} alt="" />
                                  <div className="country">japan</div>
                                  <div className="content">
                                      <h3>Osaka</h3>
                                      <span>
                                          30 Places
                                      </span>
                                  </div>
                          </div>
                      </div> 
                      <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="single-trip-box">
                                  <img src={require("../../assets/destinations4.jpg").default} alt="" />
                                  <div className="country">france</div>
                                  <div className="content">
                                      <h3>Paris</h3>
                                      <span>
                                          36 Places
                                      </span>
                                  </div>
                          </div>
                      </div> 
                      <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="single-trip-box">
                                  <img src={require("../../assets/destinations5.jpg").default} alt="" />
                                  <div className="country">United Kingdom</div>
                                  <div className="content">
                                      <h3>Londan</h3>
                                      <span>
                                          21 Places
                                      </span>
                                  </div>
                          </div>
                      </div> 
                      <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="single-trip-box">
                                  <img src={require("../../assets/destinations6.jpg").default} alt="" />
                                  <div className="country">AbuDabi</div>
                                  <div className="content">
                                      <h3>Duabi</h3>
                                      <span>
                                          14 Places
                                      </span>
                                  </div>
                          </div>
                      </div> 
                      <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="single-trip-box">
                                  <img src={require("../../assets/destinations7.jpg").default} alt="" />
                                  <div className="country">Australia</div>
                                  <div className="content">
                                      <h3>Sydney</h3>
                                      <span>
                                          10 Places
                                      </span>
                                  </div>
                          </div>
                      </div> 
                  
            </div>
            </div>
        </div>
    )
}

export default Trips
