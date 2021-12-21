import React, { useEffect, useState } from "react";
import "./HotelInfo.css";
import { useLocation } from "react-router-dom";
import { fetchHotelsCom, handleNullObj, isArrayNull } from "lib";
import hotelPhotos from "../hotelPhotos";

const HotelInfo = () => {
  const location = useLocation();
  const { hotelInfo } = handleNullObj(location.state);
  const {
    id,
    name,
    starRating,
    rating,
    badgeText,
    old,
    current,
    info,
    totalPrice,
    summary,
  } = handleNullObj(hotelInfo);
  //   console.log(hotelInfo);

  const [photos, setPhotos] = useState([]);
  const [idx, setIdx] = useState(0);

  console.log(photos);
  useEffect(async () => {
    const photos = await getHotelPhotos(
      `https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos?hotel_id=${id}`
    );
    setPhotos(photos);
  });

  const getHotelPhotos = async (url) => {
    // const data = await fetchHotelsCom(url);
    // return data

    return hotelPhotos;
  };

  const changePhoto = (idx) => {
    setIdx(idx);
  };

  //

  return (
    <div className="HotelInfo-container">
      <div className="HotelInfo-header">
        <div className="HotelInfo-hotel-name">
          {name}
          <span>{starRating}성급</span>
        </div>
        <div className="HotelInfo-hotel-price">
          <div className="HotelInfo-price-per-oneday">
            <span>{old}</span>
            {current}
          </div>
          <div className="HotelInfo-price-per-oneday-title">{info}</div>
          <div className="HotelInfo-price-total">
            {totalPrice[1]} {totalPrice[3]}
          </div>
          <div className="HotelInfo-price-summary">{summary}</div>
        </div>
      </div>
      <div className="HotelInfo-photos">
        {/* 호텔 메인 사진 */}
        <div className="HotelInfo-main-photo">
          <img
            src={!isArrayNull(photos) ? photos[idx].mainUrl : ""}
            alt="hotel-main-photo"
          />
        </div>
        {/* 호텔 서브 사진 */}
        <div className="HotelInfo-sub-photos">
          {!isArrayNull(photos) &&
            photos.map((photo, idx) => {
              if (idx < 4) {
                return (
                  <div
                    className="HotelInfo-sub-photo"
                    key={idx}
                    onClick={() => changePhoto(idx)}
                  >
                    <img src={photo.mainUrl} alt="hotel-sub-photo" />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
