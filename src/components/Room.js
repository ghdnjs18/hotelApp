import React from "react";
import "./Room.css";

import { isArrayNull, handleNullObj } from "lib";

const Room = ({ room }) => {
  const { images, name, maxOccupancy, ratePlans } = handleNullObj(room);
  const { messageTotal, messageChildren } = handleNullObj(maxOccupancy);

  const RoomThumbnail = () => {
    return (
      <div className="Room-thumbnail">
        <img src={!isArrayNull(images) && images[0].thumbnailUrl} />
      </div>
    );
  };

  const RoomInfo = () => {
    return (
      <div className="Room-info">
        <div className="Room-name">{name}</div>
        <div className="Room-max-occupancy">
          {messageTotal}
          <br />
          {messageChildren}
        </div>
        <div className="Room-more-info">객실 정보 보기</div>
      </div>
    );
  };

  const RatePlan = ({ ratePlan }) => {
    console.log(ratePlan);
    const { cancellations, features, welcomeRewards, price } =
      handleNullObj(ratePlan);
    const { current, info, totalPricePerStay } = handleNullObj(price);
    const totalPrice = totalPricePerStay
      ? totalPricePerStay.split(/[<>()]/)
      : [];

    return (
      <div className="Room-rateplan">
        <div className="Room-features">
          <div className="Room-features-title">
            {!isArrayNull(cancellations) &&
              handleNullObj(cancellations[0]).title}
          </div>
          <div className="Room-features-additionalInfo">
            {!isArrayNull(cancellations) &&
              handleNullObj(cancellations[0]).additionalInfo}
          </div>
          <div className="Room-features-descriptions">
            {!isArrayNull(features) &&
              features.map((feature, id) => {
                return (
                  <div key={id} className="Room-features-description">
                    {feature.title}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="Room-welcomeRewards">
          <div>
            Hotels.com™ 호텔스닷컴 리워드
            <br />
            적립
            <br />
            사용
          </div>
        </div>
        <div className="Room-price">
          <div className="Room-price-per-day">{current}</div>
          <div className="Room-price-info">{info}</div>
          <div className="Room-price-total">
            {totalPrice[3]} :{" "}
            {typeof totalPrice[1] === "String"
              ? totalPrice[1].split(":")[0]
              : ""}
          </div>
        </div>
      </div>
    );
  };

  const RoomRatePlans = () => {
    return (
      <>
        {!isArrayNull(ratePlans) &&
          ratePlans.map((ratePlan, id) => {
            return <RatePlan key={id} ratePlan={ratePlan} />;
          })}
      </>
    );
  };
  return (
    <div className="Room-container">
      <div className="Room-summary">
        <RoomThumbnail />
        <RoomInfo />
      </div>
      <div className="Room-plan">
        <RoomRatePlans />
      </div>
    </div>
  );
};

export default Room;
