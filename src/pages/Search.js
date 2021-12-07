import React, { useState } from "react";
import { Input, Caption, Button } from "components";
import { fetchHotelsCom, isArrayNull } from "lib";
import { useNavigate } from "react-router-dom";

import queryData from "../queryData";

import "./Search.css";

const Search = () => {
  const [destination, setDestination] = useState(""); // 목적지 정보
  const [checkIn, setCheckIn] = useState(""); // 체크인 날짜
  const [checkOut, setCheckOut] = useState(""); // 체크아웃 날짜
  const [adultsNumber, setAdultsNumber] = useState(1); // 인원수 데이터

  const [captions, setCaptions] = useState([]); // 자동완성 메뉴
  const [open, setOpen] = useState("hide"); // 자동완성 메뉴 온오프
  const [index, setIndex] = useState(0); // 자동완성 메뉴 하이라이트 변경
  const [destinationId, setDestinationId] = useState(0); //

  const navigate = useNavigate();

  // input별 변경값 반영
  const handleChange = (e) => {
    const { name, value } = e.target; // 키 입력시 해당 input의 이름과 값을 가져온다.
    // console.log(name, value)

    switch (name) {
      case "destination":
        // 입력값이 있으면 자동완성 메뉴가 보인다.
        value ? setOpen("show") : setOpen("hide");
        // 자동완성 기능 구현
        setDestination(value);
        executeAutoCaption(value);
        break;
      case "check-in":
        setCheckIn(value);
        break;
      case "check-out":
        setCheckOut(value);
        break;
      case "adults-number":
        setAdultsNumber(value);
        break;
    }
  };

  // 자동완성 기능 구현
  // 쿼리안에 있는 정보들을 다 가지고와서 captions정보를 저장한다.?
  const executeAutoCaption = async (query) => {
    // const data = await getCaptions(query)

    // 시범삼아 더미데이터를 이용해서 서버에서 데이터 가저오는것 처럼 사용
    const { suggestions } = queryData;
    const captionsItems = [];

    if (!isArrayNull(suggestions)) {
      suggestions.map((suggestion) => {
        const { entities } = suggestion;
        captionsItems.push(...entities);
      });
    }
    // console.log('captions:' , captionsItems)
    setCaptions(captionsItems);
    setHighlight(); // 사용자 검색에 따라 하이라이트 변경
  };

  const getCaptions = async (query) => {
    // const data = await fetchHotelsCom(`https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?query=${query}&currency=KRW&locale=ko_KR`)
    // return data
  };

  const setCaption = (e) => {
    // console.log(e.target)
    // 그냥 e.target으로 받을 경우 서울을 클릭하면 span태그를 가지고 온다.
    // console.log(e.target)
    const target = e.target.closest(".Caption-container");
    // console.log(target)
    setDestination(target.innerText); // 선택된 태그의 문자만 가져온다
    setDestinationId(target.dataset.destinationid); // 선택된 태그의 문자만 가져온다
    setOpen("hide");
  };

  // 현재 내가 입력하고 있는 문자열을 포함하는 자동완성 메뉴에 하이라이트 셋팅
  const setHighlight = (e) => {
    captions.map((captionItem, id) => {
      captionItem.caption.includes(destination) ? setIndex(id) : null;
    });
  };

  // 자동완성 메뉴를 보여주는 컴포넌트 - Captions
  const Captions = ({ captions }) => {
    let captionUI = null;
    if (!isArrayNull(captions)) {
      captionUI = captions.map((captionItem, id) => {
        return (
          <Caption
            key={captionItem.destinationId}
            id={id}
            destinationId={captionItem.destinationId}
            caption={captionItem.caption}
            setCaption={setCaption}
            highlight={index}
          >
            {captionItem.caption}
          </Caption>
        );
      });
    }
    return <>{captionUI}</>;
  };

  // 버튼 클릭시 검색
  const searchHotels = () => {
    console.log(destinationId, checkIn, checkOut, adultsNumber);
    navigate("/hotels", {
      state: { destinationId, checkIn, checkOut, adultsNumber },
    });
  };

  const changeCaptionHighlight = (e) => {
    const cpationLength = captions.length;

    if (e.keyCode === 13) {
      // 인덱스 값을 증가시켜 하이라이트조절은 한다.
      const target = document.getElementById(index);
      setDestination(target.innerText); // 선택된 태그의 문자만 가져온다
      setOpen("hide");
      // setIndex(0)
    } else if (e.keyCode === 40) {
      // 인덱스 값을 증가시켜 하이라이트조절은 한다.
      index < cpationLength - 1 ? setIndex(index + 1) : setIndex(0);
    } else if (e.keyCode === 38) {
      index > 0 ? setIndex(index - 1) : setIndex(cpationLength - 1);
    }
  };

  return (
    <div className="Search-container">
      <div className="Search-inputs">
        <div className="destination-container">
          <Input
            name="destination"
            type="text"
            placeholder="목적지를 입력하세요..."
            width="large"
            value={destination}
            onChange={handleChange}
            onKeyUp={changeCaptionHighlight}
          />
          <div className={`captions ${open}`}>
            {<Captions captions={captions} />}
          </div>
        </div>
        <Input
          name="check-in"
          type="date"
          placeholder="체크인"
          width="small"
          value={checkIn}
          onChange={handleChange}
        />
        <Input
          name="check-out"
          type="date"
          placeholder="체크아웃"
          width="small"
          value={checkOut}
          onChange={handleChange}
        />
        <Input
          name="adults-number"
          type="number"
          placeholder="안원수"
          width="middle"
          min={1}
          max={7}
          value={adultsNumber}
          onChange={handleChange}
        />
        <Button handleClick={searchHotels}>검색</Button>
      </div>
    </div>
  );
};

export default Search;
