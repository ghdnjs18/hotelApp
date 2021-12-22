import React, { useEffect, useState } from "react";
import "./HotelInfo.css";
import { useLocation } from "react-router-dom";
import { fetchHotelsCom, handleNullObj, isArrayNull } from "lib";
import hotelPhotos from "../hotelPhotos";
import hotelReviews from "../hotelReviews";
import hotelDetail from "../hotelDetail";
import { Review, Room } from "components";

const HotelInfo = () => {
  const location = useLocation();
  const { hotelInfo, bookingInfo } = handleNullObj(location.state);
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
  const { checkIn, checkOut, adultsNumber } = handleNullObj(bookingInfo);

  const [photos, setPhotos] = useState([]);
  const [idx, setIdx] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [details, setDetails] = useState(null);

  // console.log("p" + photos);
  // console.log("r" + reviews);
  // console.log("d" + details);
  // console.log(photos);
  useEffect(async () => {
    const photos = await getHotelPhotos(
      `https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos?hotel_id=${id}`
    );
    const reviews = await getReviews(
      `https://hotels-com-provider.p.rapidapi.com/v1/hotels/reviews?locale=ko_KR&hotel_id=${id}`
    );
    const details = await getDetailsOfHotel(
      `https://hotels-com-provider.p.rapidapi.com/v1/hotels/booking-details?adults_number=${adultsNumber}&checkin_date=${checkIn}&locale=ko_KR&currency=KRW&hotel_id=${id}&checkout_date=${checkOut}`
    );

    setPhotos(photos);
    setReviews(reviews);
    setDetails(details);
  }, []);

  const getHotelPhotos = async (url) => {
    // API 사용
    const data = await fetchHotelsCom(url);
    return data;

    // 더미 데이터로 테스트
    // return hotelPhotos;
  };

  const changePhoto = (idx) => {
    setIdx(idx);
  };

  // 사용자 리뷰 서버에서 조회하기
  const getReviews = async (url) => {
    // API 사용
    const data = await fetchHotelsCom(url);

    // 더미 데이터로 테스트
    // const { groupReview } = handleNullObj(hotelReviews);
    const { groupReview } = handleNullObj(data);
    const { reviews } = !isArrayNull(groupReview)
      ? handleNullObj(groupReview[0])
      : [];
    return reviews;
  };

  const getDetailsOfHotel = async (url) => {
    // API 사용
    const data = await fetchHotelsCom(url);
    return data;

    // 더미 데이터로 테스트
    // return hotelDetail;
  };

  const Rooms = () => {
    if (details) {
      const { roomsAndRates } = handleNullObj(details);
      const { rooms } = handleNullObj(roomsAndRates);

      return (
        <>
          {!isArrayNull(rooms) &&
            rooms.map((room, id) => {
              return <Room key={id} room={room} />;
            })}
        </>
      );
    } else {
      return <></>;
    }
  };

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
        {/* 호텔룸 정보 보여주기 */}
        <Rooms />
        {/* 호텔 리뷰 보여주기 */}
        <div className="HotelInfo-reviews">
          <div className="HotelInfo-total-review">
            <div
              className={`HotelInfo-rating-badge ${
                parseInt(rating) < 8 ? "HotelInfo-rating-badge-gray" : ""
              }`}
            >
              {rating}
            </div>
            <div className="HotelInfo-rating-badgeText">{badgeText}</div>
          </div>
          <div className="HotelInfo-user-reviews">
            {!isArrayNull(reviews) &&
              reviews.map((review, idx) => {
                return <Review key={idx} review={review} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
