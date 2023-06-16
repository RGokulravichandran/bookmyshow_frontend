import React from "react";
import "./styles.css";
import { CardMedia } from "@mui/material";

function PromotionBanner() {
  return (
    <div className="PromotionBannerDiv">
      <CardMedia
        className="PromotionBanner"
        component="img"
        image="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
      ></CardMedia>
    </div>
  );
}

export default PromotionBanner;
