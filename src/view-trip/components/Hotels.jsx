import React from "react";
import { Link } from "react-router-dom";
import HotelCardItem from "./HotelCardItem";

const Hotels = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {/* Fix map function rendering */}
        {trip?.tripData?.hotel?.map((item, index) => (
          <HotelCardItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Hotels;
