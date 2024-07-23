import React from 'react'
import './carousel.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import logo1 from "../../assets/Shell_logo.png";
import logo2 from "../../assets/Tata_Consultancy_Services_Logo.png";
import logo3 from "../../assets/World_Bank_Group_logo.png";
import logo4 from "../../assets/OECD_logo.png";
import logo5 from "../../assets/Netflix_2015_logo.png";
import logo6 from "../../assets/IBM_logo.png";


let images = [logo1, logo2, logo3, logo4, logo5, logo6];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

const Carosal = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      autoPlay={true}
      infinite={true}


    >
      {images.slice(0, 5).map(image => {
        return (
          <img
            draggable={false}
            style={{ width: "35%", height: "90%" }}
            src={image}

          />
        );
      })}
    </Carousel>
  );
};

// export default Carosal;
//     </>
//   )
// }

export default Carosal;
