import React from 'react'

const Features = () => {
    const data = [
        { id: 1,
          img:  require("../../assets/store.png").default,
          heading: "Lunch Your Business"
        },
        { id: 2,
            img:  require("../../assets/project.png").default,
            heading: "Manage Your Business"
          },
          { id: 3,
            img:  require("../../assets/growth.png").default,
            heading: "Grow Your Business"
          },
        
      ];
    return (
        <div className="feature">
            <div className="container">
                <div className="text-heading">
                    <h1>Your Small Bussiness Start With <span>Indica</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                </div>
                <div className="row">
                {data.map((user) => (
                      <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="single-feature">
                              <div className="feature-img">
                                  <img src={user.img} alt="" />
                              </div>
                              <h3>{user.heading}</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                              <a href="/">Get Start Now</a>
                          </div>
                      </div>
                  ))}
                  
                </div>
            </div>
      </div>
    )
}

export default Features
