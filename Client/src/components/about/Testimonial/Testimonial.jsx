import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slides = [
        {
            img: 'https://th.bing.com/th/id/OIP.rhmJ2je_jl4pBEVeKVcmgQHaE8?rs=1&pid=ImgDetMain',
            text: '“Consistency is key—show up and give your best.”'
        },
        {
            img: 'https://th.bing.com/th/id/OIP.OJ5lZQDl6-602u3jSswxTwHaE7?rs=1&pid=ImgDetMainhttps://pr1.nicelocal.in/jvVBsMnz7yitaP-lWl-_DA/1067x800,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2SO9tonvkSQRcOEpvuWC2WszSf9ecuFtMj_tH2YSVkB1XQmQM_33anRwnzb2MrdrmA',
            text: '“Believe in yourself, and you’re halfway there.”'
        },
        {
            img: 'https://hips.hearstapps.com/hmg-prod/images/young-woman-exercising-on-treadmill-royalty-free-image-1578326233.jpg?crop=1xw:0.84415xh;center,top&resize=1200:*',
            text: '“Set goals, crush them, repeat.”'
        },
        {
          img: 'https://img.freepik.com/premium-photo/empowering-gym-time-workout-progress_946657-2585.jpg',
          text: '“The hardest lift of all is lifting your butt off the couch.”'
      },
      {
          img: 'https://th.bing.com/th/id/OIP.8SLaJy1x1uSCjVKKiFS5AAHaEl?rs=1&pid=ImgDetMain',
          text: 'kepp Bulking uo for another day!'
      },
      {
          img: 'https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2020/12/26/USATODAY/usatsports/MotleyFool-TMOT-7dd3b1ee-gym-treadmill.jpg?width=2121&height=1193&fit=crop&format=pjpg&auto=webp',
          text: '“Strive for progress, not perfection.”'
      }
        // Add more slides as needed
    ];

    return (
    
    <div>
    <b><h1 className='hh'>Hit Your Fitness Goals<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   @KFSfitness</h1>
   </b>
        <div className="image-text-slider">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.img} alt={`Slide ${index + 1}`} />
                        <p>{slide.text}</p>
                    </div>
                ))}
            </Slider>
        </div>
        </div>
    );
};

export default Testimonial ;
