import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import './App.css';
import Header from "./component/header/Header";
import Banner from "./component/banner/Banner";
import Features from "./component/features-area/Features";
import Slick from "./component/listing-slider/Slick";
import Category from "./component/category/Category";
import Trips from "./component/trips/Trips";
import Testimonial from "./component/testimonial/Testimonial";
import Works from "./component/works/Works";
import BlogArea from "./component/blog-area/BlogArea";
import AppDownload from "./component/app-download/AppDownload";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Features/>
      <Slick/>
      <Category/>
      <Trips/>
      <Testimonial/>
      <Works/>
      <BlogArea/>
      <AppDownload/>
      <Footer/>
    </div>
  );
}

export default App;
