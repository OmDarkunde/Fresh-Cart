
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar.jsx";
import Hero from "./component/Hero.jsx";
import Category from "./component/Category.jsx";
import FeatureSectionFruit from "./component/FeatureSectionFruit.jsx";
import FeatureSectionBreakFast from "./component/FeatureSectionBreakFast.jsx";
import Banner from "./component/Banner.jsx";
import BlogSection from "./component/BlogSection.jsx";
import NewsLetter from "./component/NewsLetter.jsx";
//import Featuresection from "./component/FeatureSectionFruit.jsx"; why this is not working
import EndT from "./component/Featuresection.jsx";
import Footer from "./component/Footer.jsx";
function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeatureSectionFruit/>
      <FeatureSectionBreakFast/>
      <Banner/>
      <BlogSection/>
      <NewsLetter/>
      <EndT/>
      <Footer/>
     
    </>
  );
}

export default App;
