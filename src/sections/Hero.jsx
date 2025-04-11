import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from '../assets/headset.jpg';
import earbuds from '../assets/earbuds.jpg';
import dslr from '../assets/dslr.jpg';
import AOS from "aos";
import 'aos/dist/aos.css';
import { TbBackground } from 'react-icons/tb';




export const Hero = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL: false
  };

  useEffect(() =>{
    AOS.init({
      offset: 100,
      durationi: 500,
      easing: 'ease-in-iut',
    });

    AOS.refresh();
    
  }, [])

  return (
    <div id='hero' className='w-full flex justify-center items-center lg:g-[700px] h-[600px]'>
      <Slider className='w-full' {...settings}>
        <div>
          <div className='w-full lg-px-20 px-5 lg:h[700px] h-[600px] flex flex-col justify-center items-start gap-10
          bg-cover bg-center' style={{backgroundImage: `url(${dslr})`}}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get upto Discounts 80% off </h1>
            <h1 data-aos="zoom in" data-aos-delay="100" className='text-white lg:txt-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70]'>DSLR 360 Came <br />Camera</h1>
            <h1>100% trusted<span className='text-themeyellow font-semibold' text-themeyellow>Electronics Gadgets</span></h1>
            <button data-aos="zoom-in" data-aos-delay="200" className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'>ONLINE COLLACTIONS</button> 
          </div>
        </div>

        <div>
          <div className='w-full lg-px-20 px-5 lg:h[700px] h-[600px] flex flex-col justify-center items-start gap-10
          bg-cover bg-center' style={{backgroundImage: `url(${earbuds})`}}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get upto Discounts 80% off </h1>
            <h1 data-aos="zoom in" data-aos-delay="100" className='text-white lg:txt-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70]'>Wireless <br />Earbuds</h1>
            <h1>100% trusted<span className='text-themeyellow font-semibold' text-themeyellow>Electronics Gadgets</span></h1>
            <button data-aos="zoom-in" data-aos-delay="200" className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'>ONLINE COLLACTIONS</button> 
          </div>
        </div>

        <div>
          <div className='w-full lg-px-20 px-5 lg:h[700px] h-[600px] flex flex-col justify-center items-start gap-10
          bg-cover bg-center' style={{backgroundImage: `url(${headset})`}}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get upto Discounts 80% off </h1>
            <h1 data-aos="zoom in" data-aos-delay="100" className='text-white lg:txt-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70]'>DSLR 360 Came <br />Camera</h1>
            <h1>100% trusted<span className='text-themeyellow font-semibold' text-themeyellow>Electronics Gadgets</span></h1>
            <button data-aos="zoom-in" data-aos-delay="200" className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'>ONLINE COLLACTIONS</button> 
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Hero;
