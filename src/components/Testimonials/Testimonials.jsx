import TestimonialsCard from './TestimonialsCard'
import data from './data.js'
import Heading from '../../ui/Heading.jsx'
import './testimonials.css'
import settings from '../../utils/slider.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials(){
  

  return (
    <section>
    <div className='testimonials pt-20 max-md:pt-3'>
        <div className='container'>
            <Heading title="What our clients say" />
        </div>
        <Slider {...settings} className='testimonials_wrapper flex justify-between align-middle gap-10 py-15'>
            {data.map((item, index) => { 
                return (<TestimonialsCard key={index} item={item} />)
                })
            }
        </Slider>
    </div>
    </section>
  )
}

export default Testimonials