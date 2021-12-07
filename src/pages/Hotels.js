import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { fetchHotelsCom, isArrayNull } from "lib";
import hotelsData from "../hotelsData";

const Hotels = () => {
  const location = useLocation();
  const { destinationId, checkIn, checkOut, adultsNumber } = location.state;
  console.log(destinationId, checkIn, checkOut, adultsNumber);

  useEffect(() => {
    getHotels();
  });

  const getHotels = async () => {
    // 실제 API로 가져올 때
    // const data = await fetchHotelsCom(
    //   `https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?checkin_date=${checkIn}&checkout_date=${checkOut}&sort_order=STAR_RATING_HIGHEST_FIRST&destination_id=${destinationId}&adults_number=${adultsNumber}&locale=ko_KR&currency=KRW`
    // );
    //     console.log(data)

    const {
      searchResults: { results },
    } = hotelsData;
    console.log(results);

    return results;
  };
  return <div>Hotels Page</div>;
};

export default Hotels;
