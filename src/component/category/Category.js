import React from 'react';


const Category = () => {
    const data = [
        { id: 1,
          img:  require("../../assets/fork.png").default,
          heading: "Restaurant",
          places: "16",
        },
        { id: 2,
            img:  require("../../assets/hotel.png").default,
            heading: "Hotel",
            places: "42",
          },
          { id: 3,
            img:  require("../../assets/dumbbell.png").default,
            heading: "Fitness",
            places: "11",
          },
          { id: 4,
            img:  require("../../assets/store (2).png").default,
            heading: "Shopping",
            places: "24",
          },
          { id: 5,
            img:  require("../../assets/makeup.png").default,
            heading: "Beauty & Spa",
            places: "8",
          },
          { id: 6,
            img:  require("../../assets/calendar.png").default,
            heading: "Events",
            places: "12",
          },
          { id: 7,
            img:  require("../../assets/heart.png").default,
            heading: "Health Care",
            places: "16",
          },
          { id: 8,
            img:  require("../../assets/travel-and-tourism.png").default,
            heading: "Travel & Public",
            places: "25",
          },
          { id: 9,
            img:  require("../../assets/car-insurance.png").default,
            heading: "Auto Insurance",
            places: "10",
          },
          { id: 10,
            img:  require("../../assets/attorney.png").default,
            heading: "Attorneys",
            places: "25",
          },
          
          { id: 11,
            img:  require("../../assets/fork.png").default,
            heading: "Pulmber",
            places: "5",
          },
          { id: 12,
            img:  require("../../assets/attorney.png").default,
            heading: "MoreCategories",
            places: "",
          },

       
      ];
    return (
        <div className="categorys">
            <div className="container">
            <div className="text-heading">
                    <h1>Browse Businesses by <span>Category</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                </div>
            <div className="row">
            {data.map((user) => (
                      <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="single-category-box">
                              <div className="icon">
                                  <img src={user.img} alt="" />  
                              </div>
                              <h3>{user.heading}</h3>
                              <p><span>{user.places}</span> Places</p>
                          </div>
                      </div>
                  ))}
                  
            </div>
            </div>
        </div>
    )
}

export default Category
