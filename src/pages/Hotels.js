import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Hotels.css";

import { fetchHotelsCom, isArrayNull, handleNullObj } from "lib";
import hotelsData from "../hotelsData";
import { HotelItem, Accordion } from "components";

const Hotels = () => {
  const location = useLocation();
  const { destinationId, checkIn, checkOut, adultsNumber } =
    location.state || {};
  // console.log(destinationId, checkIn, checkOut, adultsNumber);

  const [hotels, setHotels] = useState([]);
  const [mapObj, setMapObj] = useState(null); // 지도 객체를 저장할 state값
  const [filters, setFilters] = useState(null);

  useEffect(async () => {
    const { results, filters } = await getHotels();
    setHotels(results);
    setFilters(filters);

    const m = L.map("map");
    setMapObj(m);
  }, []);

  const getHotels = async () => {
    // 실제 API로 가져올 때
    // const data = await fetchHotelsCom(
    //   `https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?checkin_date=${checkIn}&checkout_date=${checkOut}&sort_order=STAR_RATING_HIGHEST_FIRST&destination_id=${destinationId}&adults_number=${adultsNumber}&locale=ko_KR&currency=KRW`
    // );
    //     console.log(data)

    const {
      searchResults: { results },
      filters,
    } = hotelsData;

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

  const AccordionList = () => {
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
      } = handleNullObj(filters);
      const filterTypes = [
        {
          items: handleNullObj(neighbourhood.items),
          title: "위치 및 주변 지역",
        },
        { items: handleNullObj(landmarks.items), title: "랜드마크" },
        {
          items: handleNullObj(accommodationType.items),
          title: "숙박시설 유형",
        },
        { items: handleNullObj(facilities.items), title: "시설" },
        { items: handleNullObj(themesAndTypes.items), title: "테마/유형" },
        { items: handleNullObj(accessibility.items), title: "장애의 편의시설" },
      ];
      return (
        <div>
          {!isArrayNull(filterTypes) &&
            filterTypes.map((filterType, id) => {
              return (
                <Accordion
                  key={id}
                  title={filterType.title}
                  items={filterType.items}
                  displayFilter={displayFilter}
                />
              );
            })}
        </div>
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
        <AccordionList />
      </div>
      <div className="Hotels-searched">
        <div id="map"></div>
        {!isArrayNull(hotels) &&
          hotels.map((hotel) => {
            const { lat, lon, msg } = getLocation(hotel);
            displayLocation(lat, lon, msg);
            return <HotelItem hotel={hotel} key={hotel.id} />;
          })}
      </div>
    </div>
  );
};

export default Hotels;
