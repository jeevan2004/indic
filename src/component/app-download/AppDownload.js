import React from 'react'

const AppDownload = () => {
    return (
        <div className="app-download">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                            <div className="app-download-content">
                                <h2>Download Indice App</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                <div className="btn-box">
                                <div className="playstore-btn">
                                    <img src={require("../../assets/play-store.png").default} alt="" />
                                    GET IT ON
                                    <span>Google Play</span>
                                </div>

                                <div className="playstore-btn">
                                    <img src={require("../../assets/apple-store.png").default} alt="" />
                                    Download on the
                                    <span>Apple Store</span>
                                </div>
                            </div>
                            </div>
                           

                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="app-download-img">
                            <img src={require("../../assets/app-download.png").default} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownload
