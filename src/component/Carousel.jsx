import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from "react-redux";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, IconButton } from '@chakra-ui/react';
import { RiPlayReverseFill, RiPlayFill } from 'react-icons/ri';
import slide1 from '../assets/images/lobby/carousel/slide1.jpeg';
import slide2 from '../assets/images/lobby/carousel/slide2.jpeg';
import slide3 from '../assets/images/lobby/carousel/slide3.jpg';
import slide4 from '../assets/images/lobby/carousel/slide4.jpg';

const ArrowButton = ({ onClick, direction }) => {
  const { primaryText } = useSelector((state) => state.theme);
  const icon = direction === 'prev' ? <RiPlayReverseFill color={primaryText} /> : <RiPlayFill color={primaryText} />;
  return (
    <IconButton
      icon={icon}
      onClick={onClick}
      style={{ display: 'flex', zIndex: 2, justifyContent: "center", alignItems: "center" }}
      aria-label={direction === 'prev' ? 'Previous Slide' : 'Next Slide'}
    />
  );
};

const Carousel = () => {
  const images = [slide1, slide2, slide3, slide4];
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const fetchSliderData = async () => {
      // Fetch slider data here
    };
    fetchSliderData();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
    afterChange: setCurrentSlide,
    nextArrow: <ArrowButton direction="next" />,
    prevArrow: <ArrowButton direction="prev" />,
  };

  const style = {
    borderRadius: '15px',
  };

  return (
    <Box padding="0" className="homeSlider custom-carousel w-[100%] mt-0 relative">
      <Slider ref={sliderRef} {...settings}>
        {images.map((item, index) => (
          <Box key={index} className="w-[100%] relative">
            <img src={item} className="w-[100%]" alt="" style={style} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
