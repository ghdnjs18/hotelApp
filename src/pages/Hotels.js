import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Hotels.css";

import { fetchHotelsCom, isArrayNull, handleNullObj } from "lib";
import hotelsData from "../hotelsData";
import { HotelItem, Accordion, Button, StarRatingFilter } from "components";

const Hotels = () => {
  let query = {}; // hotels.com 서버로 전달될 url

  const location = useLocation();
  const { destinationId, checkIn, checkOut, adultsNumber } =
    location.state || {};
  // console.log(destinationId, checkIn, checkOut, adultsNumber);

  const BASE_URL = `https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?checkin_date=${checkIn}&checkout_date=${checkOut}&sort_order=STAR_RATING_HIGHEST_FIRST&destination_id=${destinationId}&adults_number=${adultsNumber}&locale=ko_KR&currency=KRW`;
  const [hotels, setHotels] = useState([]);
  const [mapObj, setMapObj] = useState(null); // 지도 객체를 저장할 state값
  const [filters, setFilters] = useState(null);
  const [queryURL, setQueryURL] = useState(null);

  useEffect(async () => {
    const { results, filters } = await getHotels(BASE_URL);
    setHotels(results);
    setFilters(filters);

    const m = L.map("map");
    setMapObj(m);
  }, []);

  // 사용자가 호텔 검색 버튼 클릭할때 마다 실행
  useEffect(async () => {
    let url = BASE_URL;

    // console.log(url);
    // queryURL[prop] : [23, 30, 2] - 필터 조건들이 들어가 있는 배열
    for (let prop in queryURL) {
      const queryvalue = encodeURIComponent(queryURL[prop].join(","));
      url += `&${prop}=${queryvalue}`;
      // console.log(prop, queryvalue);
    }
    const { results } = await getHotels(url);
    setHotels(results);
  }, [queryURL]);

  const getHotels = async (url) => {
    // 실제 API로 가져올 때
    const data = await fetchHotelsCom(url);
    //     console.log(data)

    const {
      searchResults: { results },
      filters,
    } = data;

    return { results, filters };
  };
  const displayLocation = (lat, lon, msg) => {
    // console.log("지도 객체", mapObj);

    if (mapObj) {
      const map = mapObj.setView([lat, lon], 13);

      // 지도의 배경화면
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // 지도에 마커 추가하기
      L.marker([lat, lon]).addTo(map).bindPopup(msg).openPopup();
    }
  };

  const displayFilter = (e) => {
    const target = e.target.closest(".Accordion-container"); // 필터 카테고리 요소
    const arrow = target.querySelector(".Accordion-arrow");
    const items = target.querySelector(".Accordion-items");
    arrow.classList.toggle("change-arrow");
    items.classList.toggle("expand-filter");
  };

  // 사용자가 필터 클릭할 때 실행
  const searchHotelsWithFilter = (querystring, value) => {
    // querystring이 문자열이기 떄문에 배열로 감싸서 적어주어야 된다.
    // query[querystring] : [30, 2, 13, 4] => 30 => 게스트하우스 2: 호텔
    query = { ...query, [querystring]: [...(query[querystring] || []), value] };
    // console.log(query);
  };

  const searchHotels = () => {
    setQueryURL(query);
  };

  const FilterList = () => {
    // console.log(filters);

    if (filters) {
      // console.log(filters);
      const {
        neighbourhood,
        landmarks,
        accommodationType,
        facilities,
        themesAndTypes,
        accessibility,
        starRating,
      } = handleNullObj(filters);
      const starRatingType = {
        items: handleNullObj(starRating).items,
        title: "숙박 시설 등급",
        querystring: "star_rating_ids",
      };
      const filterTypes = [
        {
          items: handleNullObj(neighbourhood).items,
          title: "위치 및 주변 지역",
          querystring: "landmark_id",
        },
        {
          items: handleNullObj(landmarks).items,
          title: "랜드마크",
          querystring: "landmark_id",
        },
        {
          items: handleNullObj(accommodationType).items,
          title: "숙박시설 유형",
          querystring: "accommodation_ids",
        },
        {
          items: handleNullObj(facilities).items,
          title: "시설",
          querystring: "amenity_ids",
        },
        {
          items: handleNullObj(themesAndTypes).items,
          title: "테마/유형",
          querystring: "theme_ids",
        },
        {
          items: handleNullObj(accessibility).items,
          title: "장애의 편의시설",
          querystring: "amenity_ids",
        },
      ];
      return (
        <>
          <StarRatingFilter
            title={starRatingType.title}
            items={starRatingType.items}
            querystring={starRatingType.querystring}
            searchHotelsWithFilter={searchHotelsWithFilter}
          />
          <div>
            {!isArrayNull(filterTypes) &&
              filterTypes.map((filterType, id) => {
                return (
                  <Accordion
                    key={id}
                    title={filterType.title}
                    items={filterType.items}
                    displayFilter={displayFilter}
                    querystring={filterType.querystring}
                    searchHotelsWithFilter={searchHotelsWithFilter}
                  />
                );
              })}
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };

  const getLocation = (hotel) => {
    const { name, address, coordinate } = handleNullObj(hotel);
    const { streetAddress, locality, countryName } = handleNullObj(address);
    const { lat, lon } = handleNullObj(coordinate);
    const msg = `${name}<br>${streetAddress}, ${locality}, ${countryName}`;

    return { lat, lon, msg };
  };

  return (
    <div className="Hotels-container">
      <div className="Hotels-filtered">
        <FilterList />
        <Button handleClick={searchHotels}>호텔 검색</Button>
      </div>
      <div className="Hotels-searched">
        <div id="map"></div>
        {!isArrayNull(hotels) &&
          hotels.map((hotel) => {
            const { lat, lon, msg } = getLocation(hotel);
            displayLocation(lat, lon, msg);
            const bookingInfo = { checkIn, checkOut, adultsNumber };
            return (
              <HotelItem
                hotel={hotel}
                key={hotel.id}
                bookingInfo={bookingInfo}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Hotels;
