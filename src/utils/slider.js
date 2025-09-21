const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true, // ✅ enable autoplay
  autoplaySpeed: 5000, // ✅ correct autoplay speed
  speed: 500,
  slidesToShow: 2.3,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
      },
    },
  ],
};

export default settings;
