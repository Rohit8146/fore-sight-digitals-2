import Banner from "../components/Banner/Banner";
import BookCall from "../components/BookCall/BookCall";
import Canvas from "../components/Canvas/Canvas";
import BrandSlider from "../components/IconSlider/BrandSlider";
import ImageText from "../components/Image-text/ImageText";
import Loader from "../components/Loader/Loader";
import OurService from "../components/OurServices/OurService";
import OurWork from "../components/OurWorks/OurWork";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyForesight from "../components/WhyForesight/WhyForesight";

function Homepage() {
  return (
    <>
      <Canvas />
      {/* <Banner /> */}
      <BrandSlider />
      <OurService />
      <OurWork />
      <ImageText />
      <WhyForesight />
      <Testimonials />
      <BookCall />
    </>
  );
}

export default Homepage;
