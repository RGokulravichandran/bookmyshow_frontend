import React from "react";
import "./styles.css";
import ImageSlider from "../../components/home/Imgslider";
import PromotionBanner from "../../components/home/PromotionBanner";
import MoviesCards from "../../components/home/MoviesCards";

function HomePage() {
  return (
    <div className="HomePage">
      <ImageSlider />
      <MoviesCards />
      <PromotionBanner />
    </div>
  );
}

export default HomePage;
