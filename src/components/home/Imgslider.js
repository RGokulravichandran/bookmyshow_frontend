import React, { useState, useEffect } from "react";

const images = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1681894281434_backstreetrevisedcreativedesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1681123745909_webbannernpa.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1680271399724_web.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <img className="ImageSliderImg" src={images[currentIndex]} alt="Slider" />
  );
};

export default ImageSlider;

// import React, { useState } from "react";

// const images = [
//   "https://assets-in.bmscdn.com/promotions/cms/creatives/1681894281434_backstreetrevisedcreativedesktop.jpg",
//   "https://assets-in.bmscdn.com/promotions/cms/creatives/1681123745909_webbannernpa.jpg",
//   "https://assets-in.bmscdn.com/promotions/cms/creatives/1680271399724_web.jpg",
// ];

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//   };

//   const goToNext = () => {
//     setCurrentIndex((currentIndex + 1) % images.length);
//   };

//   return (
//     <div className="slider">
//       <img src={images[currentIndex]} alt="Slider" />
//       <div className="arrow left" onClick={goToPrevious}>
//         &lt;
//       </div>
//       <div className="arrow right" onClick={goToNext}>
//         &gt;
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
