// Booking details of the hotel
// 특정 호텔의 자세한 정보 by id
const hotelDetail = {
  name: "그랜드 인터컨티넨탈 서울 파르나스 (Grand InterContinental Seoul Parnas, an IHG Hotel)",
  address: {
    countryName: "South Korea",
    cityName: "서울특별시",
    postalCode: "135-732",
    provinceName: "서울특별시",
    addressLine1: "강남구 테헤란로 521",
    countryCode: "KOR",
    pattern:
      "AddressLine1,#AddressLine2,#CityName,#ProvinceName,#PostalCode,#CountryName",
    fullAddress: "강남구 테헤란로 521, 서울특별시, 135-732, South Korea",
  },
  localisedAddress: {
    countryName: "대한민국",
    cityName: "서울특별시",
    postalCode: "135-732",
    provinceName: "서울특별시",
    addressLine1: "강남구 테헤란로 521",
    countryCode: "KOR",
    pattern: "ProvinceName#CityName#AddressLine2#AddressLine1",
    fullAddress: "서울특별시 강남구 테헤란로 521",
  },
  header: {
    hotelId: "116487",
    destinationId: "759818",
    pointOfSaleId: "HCOM_KR",
    currencyCode: "KRW",
    occupancyKey: "A1",
    hotelLocation: {
      coordinates: {
        latitude: 37.50846,
        longitude: 127.061036,
      },
      resolvedLocation: "CITY:759818:PROVIDED:PROVIDED",
      locationName: "서울",
    },
  },
  roomsAndRates: {
    bookingUrl: "https://kr.hotels.com/bookingInitialise.do",
    rooms: [
      {
        name: "클래식룸",
        images: [
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/0c42601d_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/0c42601d_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/6a4db9f9_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/6a4db9f9_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_b.jpg",
          },
          {
            caption: "객실 전망",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/e5ae8633_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/e5ae8633_b.jpg",
          },
          {
            caption: "욕실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/cd71cccd_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/cd71cccd_b.jpg",
          },
          {
            caption: "욕실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/eff408dd_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/eff408dd_b.jpg",
          },
        ],
        maxOccupancy: {
          children: 2,
          total: 3,
          messageChildren: "(최대 아동 2명 포함)",
          messageTotal: "숙박 가능 인원: 최대 3명",
        },
        additionalInfo: {
          description:
            "<p><strong>킹사이즈침대 1개</strong></p><p>40 제곱미터 크기의 객실, 시내 전망</p><br/><p><b>구조</b> - 별도의 좌석 공간</p><p><b>휴식</b> - 객실 내 마사지 이용 가능</p><p><b>인터넷</b> - 무료 WiFi 및 유선 인터넷</p><p><b>엔터테인먼트</b> - 프리미엄 채널 시청이 가능한 55인치 TV</p><p><b>식음료</b> - 미니냉장고, 미니바, 에스프레소 메이커 및 24시간 룸서비스</p><p><b>편안한 잠자리</b> - 오리/거위털 이불, 암막 커튼, 턴다운 서비스 및 침대 시트 </p><p><b>욕실</b> - 전용 욕실, 전신 욕조 및 레인폴 샤워기가 있는 별도의 샤워실</p><p><b>기타 편의 시설</b> - 금고, 다리미/다리미판, 노트북 작업 공간, 요청 시 무료 유아용 침대 이용 가능</p><p><b>편의 서비스/시설</b> - 에어컨, 하우스키핑(매일) 및 난방</p><p><b>장애인 편의 시설</b> - 레버식 문손잡이 및 도어벨/전화 알림</p><p><b>알아둘 사항</b> - 간이/추가 침대 이용 불가</p><p>흡연 및 금연, 2020년 12월에 리노베이션됨</p><p>객실/침대 유형은 체크인 시 이용 상황에 따라 다릅니다. </p> <p>연결/인접 객실을 요청하실 수 있으며, 이용 상황에 따라 달라질 수 있습니다. </p>",
          details: {
            amenities: [
              "TV",
              "가이드북 또는 추천 정보",
              "각각 다른 스타일의 객실",
              "객실 금고",
              "객실 내 마사지 서비스 가능",
              "객실 연결/인접 가능",
              "고급 세면용품",
              "난방",
              "노트북 작업 공간",
              "다리미/다리미판",
              "도어벨/전화 알림",
              "레버식 문손잡이",
              "레스토랑 다이닝 가이드",
              "레인폴 샤워기",
              "룸서비스(24시간)",
              "리넨 제공됨",
              "매일 하우스키핑",
              "목욕가운",
              "무료 WiFi",
              "무료 생수",
              "무료 세면용품",
              "무료 유선 인터넷",
              "무료 유아용 침대",
              "미니 냉장고",
              "미니바",
              "방음 객실",
              "별도의 욕조와 샤워",
              "별도의 좌석 공간",
              "비누",
              "비데",
              "샴푸",
              "슬리퍼",
              "암막 커튼",
              "에스프레소 메이커",
              "에어컨",
              "오리/거위털 이불",
              "옷장",
              "욕실 수 - 1",
              "위성 TV 서비스",
              "전신 욕조",
              "전용 욕실",
              "전화",
              "책상",
              "칫솔/치약 제공",
              "커피/티 메이커",
              "타월 제공됨",
              "턴다운 서비스",
              "프리미엄 TV 채널",
              "헤어드라이어",
              "현지 지도",
              "화장지",
            ],
          },
        },
        ratePlans: [
          {
            occupancy: {
              maxAdults: 3,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "아침 식사 추가 가능(현장에서 결제)",
                info: "아침 식사는 성인의 경우 약 KRW 59000, 아동의 경우 약 KRW 29500의 추가 요금을 내고 이용하실 수 있습니다.",
                dataSourceInfo: "2336db56-4751-406e-a853-c03b27a4ccb9",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩238,000",
              unformattedCurrent: 238000,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩238,000",
                  },
                  {
                    heading: "총 2박",
                    value: "₩476,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩476,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "0",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381100511",
                      roomTypeCode: "211512652",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩238,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩476,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩238,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩476,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|211512652|381100511",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|201.5548517132162|201.5548517132162|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
          {
            occupancy: {
              maxAdults: 3,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "2인 아침 식사 포함",
                info: "숙박에 2인 아침 식사가 포함되어 있습니다.",
                dataSourceInfo: "bca8bea3-b1fd-4db8-8c3d-7fdeb8ef9e7e",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩298,000",
              unformattedCurrent: 298000,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩298,000",
                  },
                  {
                    heading: "총 2박",
                    value: "₩596,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩596,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "1",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381101492",
                      roomTypeCode: "211512652",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..fKY7sfU1QNFoLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩298,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩596,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..fKY7sfU1QNFoLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩298,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩596,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..fKY7sfU1QNFoLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|211512652|381101492",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|252.3669992039430|252.3669992039430|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
        ],
      },
      {
        name: "클래식룸, 싱글침대 2개",
        images: [
          {
            caption: "객실 전망",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/c60871ee_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/c60871ee_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/44100659_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/44100659_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2cb6bc3f_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2cb6bc3f_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_b.jpg",
          },
          {
            caption: "욕실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/eff408dd_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/eff408dd_b.jpg",
          },
        ],
        maxOccupancy: {
          children: 1,
          total: 2,
          messageChildren: "(최대 아동 1명 포함)",
          messageTotal: "숙박 가능 인원: 최대 2명",
        },
        additionalInfo: {
          description:
            "<p><strong>싱글침대 2개</strong></p><p>38 제곱미터 크기의 객실, 시내 전망</p><br/><p><b>구조</b> - 별도의 좌석 공간</p><p><b>휴식</b> - 객실 내 마사지 이용 가능</p><p><b>인터넷</b> - 무료 WiFi 및 유선 인터넷</p><p><b>엔터테인먼트</b> - 프리미엄 채널 시청이 가능한 55인치 TV</p><p><b>식음료</b> - 미니냉장고, 미니바, 에스프레소 메이커 및 24시간 룸서비스</p><p><b>편안한 잠자리</b> - 오리/거위털 이불, 암막 커튼, 턴다운 서비스 및 침대 시트 </p><p><b>욕실</b> - 전용 욕실, 전신 욕조 및 레인폴 샤워기가 있는 별도의 샤워실</p><p><b>기타 편의 시설</b> - 금고, 다리미/다리미판, 노트북 작업 공간, 요청 시 무료 유아용 침대 이용 가능</p><p><b>편의 서비스/시설</b> - 에어컨, 하우스키핑(매일) 및 난방</p><p><b>장애인 편의 시설</b> - 레버식 문손잡이 및 도어벨/전화 알림</p><p><b>알아둘 사항</b> - 간이/추가 침대 이용 불가</p><p>금연, 2020년 12월에 리노베이션됨</p><p>연결/인접 객실을 요청하실 수 있으며, 이용 상황에 따라 달라질 수 있습니다. </p>",
          details: {
            amenities: [
              "TV",
              "가이드북 또는 추천 정보",
              "각각 다른 스타일의 객실",
              "객실 금고",
              "객실 내 마사지 서비스 가능",
              "객실 연결/인접 가능",
              "고급 세면용품",
              "난방",
              "노트북 작업 공간",
              "다리미/다리미판",
              "도어벨/전화 알림",
              "레버식 문손잡이",
              "레스토랑 다이닝 가이드",
              "레인폴 샤워기",
              "룸서비스(24시간)",
              "리넨 제공됨",
              "매일 하우스키핑",
              "목욕가운",
              "무료 WiFi",
              "무료 생수",
              "무료 세면용품",
              "무료 유선 인터넷",
              "무료 유아용 침대",
              "미니 냉장고",
              "미니바",
              "방음 객실",
              "별도의 욕조와 샤워",
              "별도의 좌석 공간",
              "비누",
              "비데",
              "샴푸",
              "슬리퍼",
              "암막 커튼",
              "에스프레소 메이커",
              "에어컨",
              "오리/거위털 이불",
              "옷장",
              "욕실 수 - 1",
              "위성 TV 서비스",
              "전신 욕조",
              "전용 욕실",
              "전화",
              "책상",
              "칫솔/치약 제공",
              "커피/티 메이커",
              "타월 제공됨",
              "턴다운 서비스",
              "프리미엄 TV 채널",
              "헤어드라이어",
              "현지 지도",
              "화장지",
            ],
          },
        },
        ratePlans: [
          {
            occupancy: {
              maxAdults: 2,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "아침 식사 추가 가능(현장에서 결제)",
                info: "아침 식사는 성인의 경우 약 KRW 59000, 아동의 경우 약 KRW 29500의 추가 요금을 내고 이용하실 수 있습니다.",
                dataSourceInfo: "2336db56-4751-406e-a853-c03b27a4ccb9",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩238,000",
              unformattedCurrent: 238000,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩238,000",
                  },
                  {
                    heading: "총 2박",
                    value: "₩476,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩476,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "2",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381102309",
                      roomTypeCode: "314007993",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩238,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩476,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩238,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩476,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|314007993|381102309",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|201.5548517132162|201.5548517132162|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
          {
            occupancy: {
              maxAdults: 2,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "2인 아침 식사 포함",
                info: "숙박에 2인 아침 식사가 포함되어 있습니다.",
                dataSourceInfo: "bca8bea3-b1fd-4db8-8c3d-7fdeb8ef9e7e",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩298,000",
              unformattedCurrent: 298000,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩298,000",
                  },
                  {
                    heading: "총 2박",
                    value: "₩596,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩596,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "3",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381100605",
                      roomTypeCode: "314007993",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..fKY7sfU1QNFoLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩298,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩596,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..fKY7sfU1QNFoLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩298,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩596,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..fKY7sfU1QNFoLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|314007993|381100605",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|252.3669992039430|252.3669992039430|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
        ],
      },
      {
        name: "클래식룸, 킹사이즈침대 1개, 장애인 지원 (Mobility Accessible)",
        images: [
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/0c42601d_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/0c42601d_b.jpg",
          },
          {
            caption: "객실 전망",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/8ee153d6_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/8ee153d6_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2cb6bc3f_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2cb6bc3f_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_b.jpg",
          },
          {
            caption: "객실 전망",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/7f421b01_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/7f421b01_b.jpg",
          },
          {
            caption: "욕실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/eff408dd_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/eff408dd_b.jpg",
          },
        ],
        maxOccupancy: {
          children: 2,
          total: 3,
          messageChildren: "(최대 아동 2명 포함)",
          messageTotal: "숙박 가능 인원: 최대 3명",
        },
        additionalInfo: {
          description:
            "<p><strong>킹사이즈침대 1개</strong></p><p>도시 전망</p><br/><p><b>구조</b> - 별도의 좌석 공간</p><p><b>휴식</b> - 객실 내 마사지 이용 가능</p><p><b>인터넷</b> - 무료 WiFi 및 유선 인터넷</p><p><b>엔터테인먼트</b> - 프리미엄 채널 시청이 가능한 55인치 TV</p><p><b>식음료</b> - 미니냉장고, 미니바, 에스프레소 메이커 및 24시간 룸서비스</p><p><b>편안한 잠자리</b> - 오리/거위털 이불, 암막 커튼, 턴다운 서비스 및 침대 시트 </p><p><b>욕실</b> - 전용 욕실, 전신 욕조 및 레인폴 샤워기가 있는 별도의 샤워실</p><p><b>기타 편의 시설</b> - 금고, 다리미/다리미판, 노트북 작업 공간, 요청 시 무료 유아용 침대 이용 가능</p><p><b>편의 서비스/시설</b> - 에어컨, 하우스키핑(매일) 및 난방</p><p><b>장애인 편의 시설</b> - 도어벨/전화 알림, 안전손잡이 - 욕조, 높이가 낮은 도어록, 낮은 위치의 도어 외시경, 레버식 문손잡이, 휠체어로 이용 가능, 장애인 지원 욕조 및 휠체어로 이용 가능한 출입구</p><p><b>알아둘 사항</b> - 간이/추가 침대 이용 불가</p><p>금연, 2020년 12월에 리노베이션됨</p><p>연결/인접 객실을 요청하실 수 있으며, 이용 상황에 따라 달라질 수 있습니다. </p>",
          details: {
            amenities: [
              "TV",
              "가이드북 또는 추천 정보",
              "각각 다른 스타일의 객실",
              "객실 금고",
              "객실 내 마사지 서비스 가능",
              "객실 연결/인접 가능",
              "고급 세면용품",
              "난방",
              "노트북 작업 공간",
              "다리미/다리미판",
              "도어벨/전화 알림",
              "레버식 문손잡이",
              "레스토랑 다이닝 가이드",
              "레인폴 샤워기",
              "룸서비스(24시간)",
              "리넨 제공됨",
              "매일 하우스키핑",
              "목욕가운",
              "무료 WiFi",
              "무료 생수",
              "무료 세면용품",
              "무료 유선 인터넷",
              "무료 유아용 침대",
              "미니 냉장고",
              "미니바",
              "방음 객실",
              "별도의 욕조와 샤워",
              "별도의 좌석 공간",
              "비누",
              "비데",
              "샴푸",
              "슬리퍼",
              "암막 커튼",
              "에스프레소 메이커",
              "에어컨",
              "오리/거위털 이불",
              "옷장",
              "욕실 수 - 1",
              "위성 TV 서비스",
              "전신 욕조",
              "전용 욕실",
              "전화",
              "책상",
              "칫솔/치약 제공",
              "커피/티 메이커",
              "타월 제공됨",
              "턴다운 서비스",
              "프리미엄 TV 채널",
              "헤어드라이어",
              "현지 지도",
              "화장지",
            ],
          },
        },
        ratePlans: [
          {
            occupancy: {
              maxAdults: 3,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "아침 식사 추가 가능(현장에서 결제)",
                info: "아침 식사는 성인의 경우 약 KRW 59000, 아동의 경우 약 KRW 29500의 추가 요금을 내고 이용하실 수 있습니다.",
                dataSourceInfo: "2336db56-4751-406e-a853-c03b27a4ccb9",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩238,000",
              unformattedCurrent: 238000,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩238,000",
                  },
                  {
                    heading: "총 2박",
                    value: "₩476,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩476,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "4",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381932645",
                      roomTypeCode: "314070953",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩238,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩476,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩238,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩476,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|314070953|381932645",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|201.5548517132162|201.5548517132162|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
          {
            occupancy: {
              maxAdults: 3,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "2인 아침 식사 포함",
                info: "숙박에 2인 아침 식사가 포함되어 있습니다.",
                dataSourceInfo: "bca8bea3-b1fd-4db8-8c3d-7fdeb8ef9e7e",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩298,000",
              unformattedCurrent: 298000,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩298,000",
                  },
                  {
                    heading: "총 2박",
                    value: "₩596,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩596,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "5",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381932675",
                      roomTypeCode: "314070953",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..fKY7sfU1QNFoLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩298,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩596,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..fKY7sfU1QNFoLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩298,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩596,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..fKY7sfU1QNFoLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|314070953|381932675",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|252.3669992039430|252.3669992039430|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
        ],
      },
      {
        name: "주니어 스위트, 킹사이즈침대 1개",
        images: [
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/613f5478_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/613f5478_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/698c4c99_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/698c4c99_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/41077e1f_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/41077e1f_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2b89ce7c_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2b89ce7c_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2cb6bc3f_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2cb6bc3f_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_b.jpg",
          },
          {
            caption: "객실 전망",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/fdee7f8f_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/fdee7f8f_b.jpg",
          },
          {
            caption: "욕실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/48fa7862_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/48fa7862_b.jpg",
          },
        ],
        maxOccupancy: {
          children: 2,
          total: 3,
          messageChildren: "(최대 아동 2명 포함)",
          messageTotal: "숙박 가능 인원: 최대 3명",
        },
        additionalInfo: {
          description:
            "<p><strong>킹사이즈침대 1개</strong></p><p>58 제곱미터 크기의 객실, 시내 전망</p><br/><p><b>구조</b> - 별도의 좌석 공간</p><p><b>휴식</b> - 객실 내 마사지 이용 가능</p><p><b>인터넷</b> - 무료 WiFi 및 유선 인터넷</p><p><b>엔터테인먼트</b> - 프리미엄 채널 시청이 가능한 55인치 TV</p><p><b>식음료</b> - 미니냉장고, 미니바, 에스프레소 메이커 및 24시간 룸서비스</p><p><b>편안한 잠자리</b> - 오리/거위털 이불, 암막 커튼, 턴다운 서비스 및 침대 시트 </p><p><b>욕실</b> - 전용 욕실, 전신 욕조 및 레인폴 샤워기가 있는 별도의 샤워실</p><p><b>기타 편의 시설</b> - 금고, 다리미/다리미판, 노트북 작업 공간, 요청 시 간이/추가 침대와 무료 유아용 침대 이용 가능</p><p><b>편의 서비스/시설</b> - 에어컨, 하우스키핑(매일) 및 난방</p><p><b>장애인 편의 시설</b> - 레버식 문손잡이 및 도어벨/전화 알림</p><p>금연, 2020년 12월에 리노베이션됨</p><p>연결/인접 객실을 요청하실 수 있으며, 이용 상황에 따라 달라질 수 있습니다. </p>",
          details: {
            amenities: [
              "TV",
              "가이드북 또는 추천 정보",
              "각각 다른 스타일의 객실",
              "객실 금고",
              "객실 내 마사지 서비스 가능",
              "객실 연결/인접 가능",
              "고급 세면용품",
              "난방",
              "노트북 작업 공간",
              "다리미/다리미판",
              "도어벨/전화 알림",
              "레버식 문손잡이",
              "레스토랑 다이닝 가이드",
              "레인폴 샤워기",
              "룸서비스(24시간)",
              "리넨 제공됨",
              "매일 하우스키핑",
              "목욕가운",
              "무료 WiFi",
              "무료 생수",
              "무료 세면용품",
              "무료 유선 인터넷",
              "무료 유아용 침대",
              "미니 냉장고",
              "미니바",
              "방음 객실",
              "별도의 욕조와 샤워",
              "별도의 좌석 공간",
              "비누",
              "비데",
              "샴푸",
              "슬리퍼",
              "암막 커튼",
              "에스프레소 메이커",
              "에어컨",
              "오리/거위털 이불",
              "옷장",
              "욕실 수 - 1",
              "위성 TV 서비스",
              "전신 욕조",
              "전용 욕실",
              "전화",
              "책상",
              "칫솔/치약 제공",
              "커피/티 메이커",
              "타월 제공됨",
              "턴다운 서비스",
              "프리미엄 TV 채널",
              "헤어드라이어",
              "현지 지도",
              "화장지",
            ],
          },
        },
        ratePlans: [
          {
            occupancy: {
              maxAdults: 3,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "아침 식사 추가 가능(현장에서 결제)",
                info: "아침 식사는 성인의 경우 약 KRW 59000, 아동의 경우 약 KRW 29500의 추가 요금을 내고 이용하실 수 있습니다.",
                dataSourceInfo: "2336db56-4751-406e-a853-c03b27a4ccb9",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩306,000",
              unformattedCurrent: 306000,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩306,000",
                  },
                  {
                    heading: "총 2박",
                    value: "₩612,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩612,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "6",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381100744",
                      roomTypeCode: "314007997",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..K9fJ9dnYlmVoLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩306,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩612,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..K9fJ9dnYlmVoLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩306,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩612,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..K9fJ9dnYlmVoLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|314007997|381100744",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|259.1419522027066|259.1419522027066|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
          {
            occupancy: {
              maxAdults: 3,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "2인 아침 식사 포함",
                info: "숙박에 2인 아침 식사가 포함되어 있습니다.",
                dataSourceInfo: "bca8bea3-b1fd-4db8-8c3d-7fdeb8ef9e7e",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩366,000",
              unformattedCurrent: 366000,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩366,000",
                  },
                  {
                    heading: "총 2박",
                    value: "₩732,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩732,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "7",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381100907",
                      roomTypeCode: "314007997",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..ZbeuMNNKPNhoLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩366,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩732,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..ZbeuMNNKPNhoLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩366,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩732,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..ZbeuMNNKPNhoLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|314007997|381100907",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|309.9540996934334|309.9540996934334|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
        ],
      },
      {
        name: "클래식룸, 킹사이즈침대 1개, 장애인 지원, 비즈니스 라운지 이용 (Intercontinental Deluxe)",
        images: [
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/3815ca41_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/3815ca41_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2b89ce7c_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2b89ce7c_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/6a4db9f9_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/6a4db9f9_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2cb6bc3f_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2cb6bc3f_b.jpg",
          },
          {
            caption: "객실 전망",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/8ee153d6_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/8ee153d6_b.jpg",
          },
          {
            caption: "욕실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/48fa7862_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/48fa7862_b.jpg",
          },
          {
            caption: "욕실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/cd71cccd_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/cd71cccd_b.jpg",
          },
          {
            caption: "욕실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/eff408dd_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/eff408dd_b.jpg",
          },
        ],
        maxOccupancy: {
          children: 1,
          total: 2,
          messageChildren: "(최대 아동 1명 포함)",
          messageTotal: "숙박 가능 인원: 최대 2명",
        },
        additionalInfo: {
          description:
            "<p><strong>킹사이즈침대 1개</strong></p><p>38 제곱미터 크기의 객실, 시내 전망</p><br/><p><b>클럽층</b> - 클럽 라운지 이용, 뷔페 아침 식사 및 라운지에서 인터넷 사용, 만 13 세 미만 고객 라운지 이용 불가</p><p><b>구조</b> - 별도의 좌석 공간</p><p><b>휴식</b> - 객실 내 마사지 이용 가능</p><p><b>인터넷</b> - 무료 WiFi 및 유선 인터넷</p><p><b>엔터테인먼트</b> - 프리미엄 채널 시청이 가능한 55인치 TV</p><p><b>식음료</b> - 미니냉장고, 미니바, 에스프레소 메이커 및 24시간 룸서비스</p><p><b>편안한 잠자리</b> - 오리/거위털 이불, 암막 커튼, 턴다운 서비스 및 침대 시트 </p><p><b>욕실</b> - 전용 욕실, 전신 욕조 및 레인폴 샤워기가 있는 별도의 샤워실</p><p><b>기타 편의 시설</b> - 금고, 다리미/다리미판, 노트북 작업 공간, 요청 시 무료 유아용 침대 이용 가능</p><p><b>편의 서비스/시설</b> - 에어컨, 하우스키핑(매일) 및 난방</p><p><b>장애인 편의 시설</b> - 레버식 문손잡이 및 도어벨/전화 알림</p><p><b>알아둘 사항</b> - 간이/추가 침대 이용 불가</p><p>금연, 2020년 12월에 리노베이션됨</p><p>연결/인접 객실을 요청하실 수 있으며, 이용 상황에 따라 달라질 수 있습니다. </p>",
          details: {
            amenities: [
              "TV",
              "가이드북 또는 추천 정보",
              "각각 다른 스타일의 객실",
              "객실 금고",
              "객실 내 마사지 서비스 가능",
              "객실 연결/인접 가능",
              "고급 세면용품",
              "난방",
              "노트북 작업 공간",
              "다리미/다리미판",
              "도어벨/전화 알림",
              "레버식 문손잡이",
              "레스토랑 다이닝 가이드",
              "레인폴 샤워기",
              "룸서비스(24시간)",
              "리넨 제공됨",
              "매일 하우스키핑",
              "목욕가운",
              "무료 WiFi",
              "무료 생수",
              "무료 세면용품",
              "무료 유선 인터넷",
              "무료 유아용 침대",
              "미니 냉장고",
              "미니바",
              "방음 객실",
              "별도의 욕조와 샤워",
              "별도의 좌석 공간",
              "비누",
              "비데",
              "샴푸",
              "슬리퍼",
              "암막 커튼",
              "에스프레소 메이커",
              "에어컨",
              "오리/거위털 이불",
              "옷장",
              "욕실 수 - 1",
              "위성 TV 서비스",
              "전신 욕조",
              "전용 욕실",
              "전화",
              "책상",
              "칫솔/치약 제공",
              "커피/티 메이커",
              "타월 제공됨",
              "턴다운 서비스",
              "프리미엄 TV 채널",
              "헤어드라이어",
              "현지 지도",
              "화장지",
            ],
          },
        },
        ratePlans: [
          {
            occupancy: {
              maxAdults: 2,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "아침 식사 추가 가능(현장에서 결제)",
                info: "아침 식사는 성인의 경우 약 KRW 59000, 아동의 경우 약 KRW 29500의 추가 요금을 내고 이용하실 수 있습니다.",
                dataSourceInfo: "2336db56-4751-406e-a853-c03b27a4ccb9",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩374,000",
              unformattedCurrent: 374000,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩374,000",
                  },
                  {
                    heading: "총 2박",
                    value: "₩748,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩748,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "8",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381101374",
                      roomTypeCode: "314007992",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..r1WpIIyAye1oLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩374,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩748,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..r1WpIIyAye1oLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩374,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩748,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..r1WpIIyAye1oLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|314007992|381101374",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|316.7290526921969|316.7290526921969|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
          {
            occupancy: {
              maxAdults: 2,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "2인 아침 식사 포함",
                info: "숙박에 2인 아침 식사가 포함되어 있습니다.",
                dataSourceInfo: "bca8bea3-b1fd-4db8-8c3d-7fdeb8ef9e7e",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩434,000",
              unformattedCurrent: 434000,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩434,000",
                  },
                  {
                    heading: "총 2박",
                    value: "₩868,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩868,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "9",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381101732",
                      roomTypeCode: "314007992",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..TxFeC86cOn5oLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩434,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩868,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..TxFeC86cOn5oLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩434,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩868,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..TxFeC86cOn5oLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|314007992|381101732",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|367.5412001829237|367.5412001829237|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
        ],
      },
      {
        name: "주니어 스위트, 킹사이즈침대 1개, 장애인 지원, 비즈니스 라운지 이용 (Intercontinental Junior)",
        images: [
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/613f5478_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/613f5478_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2b89ce7c_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2b89ce7c_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/41077e1f_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/41077e1f_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/1289359d_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/1289359d_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/adf8756a_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/adf8756a_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/698c4c99_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/698c4c99_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/ac5ebf1a_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/ac5ebf1a_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2cb6bc3f_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2cb6bc3f_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_b.jpg",
          },
          {
            caption: "객실 전망",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/fdee7f8f_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/fdee7f8f_b.jpg",
          },
          {
            caption: "욕실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/48fa7862_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/48fa7862_b.jpg",
          },
          {
            caption: "욕실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/eff408dd_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/eff408dd_b.jpg",
          },
        ],
        maxOccupancy: {
          children: 1,
          total: 2,
          messageChildren: "(최대 아동 1명 포함)",
          messageTotal: "숙박 가능 인원: 최대 2명",
        },
        additionalInfo: {
          description:
            "<p><strong>킹사이즈침대 1개</strong></p><p>60 제곱미터 크기의 객실, 시내 전망</p><br/><p><b>클럽층</b> - 클럽 라운지 이용, 뷔페 아침 식사 및 라운지에서 인터넷 사용, 만 13 세 미만 고객 라운지 이용 불가</p><p><b>구조</b> - 별도의 좌석 공간</p><p><b>휴식</b> - 객실 내 마사지 이용 가능</p><p><b>인터넷</b> - 무료 WiFi 및 유선 인터넷</p><p><b>엔터테인먼트</b> - 프리미엄 채널 시청이 가능한 55인치 TV</p><p><b>식음료</b> - 미니냉장고, 미니바, 에스프레소 메이커 및 24시간 룸서비스</p><p><b>편안한 잠자리</b> - 오리/거위털 이불, 암막 커튼, 턴다운 서비스 및 침대 시트 </p><p><b>욕실</b> - 전용 욕실, 전신 욕조 및 레인폴 샤워기가 있는 별도의 샤워실</p><p><b>기타 편의 시설</b> - 금고, 다리미/다리미판, 노트북 작업 공간, 요청 시 간이/추가 침대와 무료 유아용 침대 이용 가능</p><p><b>편의 서비스/시설</b> - 에어컨, 하우스키핑(매일) 및 난방</p><p><b>장애인 편의 시설</b> - 레버식 문손잡이 및 도어벨/전화 알림</p><p>금연, 2020년 12월에 리노베이션됨</p><p>연결/인접 객실을 요청하실 수 있으며, 이용 상황에 따라 달라질 수 있습니다. </p>",
          details: {
            amenities: [
              "TV",
              "가이드북 또는 추천 정보",
              "각각 다른 스타일의 객실",
              "객실 금고",
              "객실 내 마사지 서비스 가능",
              "객실 연결/인접 가능",
              "고급 세면용품",
              "난방",
              "노트북 작업 공간",
              "다리미/다리미판",
              "도어벨/전화 알림",
              "레버식 문손잡이",
              "레스토랑 다이닝 가이드",
              "레인폴 샤워기",
              "룸서비스(24시간)",
              "리넨 제공됨",
              "매일 하우스키핑",
              "목욕가운",
              "무료 WiFi",
              "무료 생수",
              "무료 세면용품",
              "무료 유선 인터넷",
              "무료 유아용 침대",
              "미니 냉장고",
              "미니바",
              "방음 객실",
              "별도의 욕조와 샤워",
              "별도의 좌석 공간",
              "비누",
              "비데",
              "샴푸",
              "슬리퍼",
              "암막 커튼",
              "에스프레소 메이커",
              "에어컨",
              "오리/거위털 이불",
              "옷장",
              "욕실 수 - 1",
              "위성 TV 서비스",
              "전신 욕조",
              "전용 욕실",
              "전화",
              "책상",
              "칫솔/치약 제공",
              "커피/티 메이커",
              "타월 제공됨",
              "턴다운 서비스",
              "프리미엄 TV 채널",
              "헤어드라이어",
              "현지 지도",
              "화장지",
            ],
          },
        },
        ratePlans: [
          {
            occupancy: {
              maxAdults: 2,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "아침 식사 추가 가능(현장에서 결제)",
                info: "아침 식사는 성인의 경우 약 KRW 59000, 아동의 경우 약 KRW 29500의 추가 요금을 내고 이용하실 수 있습니다.",
                dataSourceInfo: "2336db56-4751-406e-a853-c03b27a4ccb9",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩408,000",
              unformattedCurrent: 408000,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩408,000",
                  },
                  {
                    heading: "총 2박",
                    value: "₩816,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩816,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "10",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381100530",
                      roomTypeCode: "314007996",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..hbzngUH_orloLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩408,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩816,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..hbzngUH_orloLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩408,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩816,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..hbzngUH_orloLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|314007996|381100530",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|345.5226029369421|345.5226029369421|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
          {
            occupancy: {
              maxAdults: 2,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "2인 아침 식사 포함",
                info: "숙박에 2인 아침 식사가 포함되어 있습니다.",
                dataSourceInfo: "bca8bea3-b1fd-4db8-8c3d-7fdeb8ef9e7e",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩468,000",
              unformattedCurrent: 468000,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩468,000",
                  },
                  {
                    heading: "총 2박",
                    value: "₩936,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩936,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "11",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381101183",
                      roomTypeCode: "314007996",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..q6QkeHN_o_poLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩468,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩936,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..q6QkeHN_o_poLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩468,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩936,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..q6QkeHN_o_poLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|314007996|381101183",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|396.3347504276689|396.3347504276689|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
        ],
      },
      {
        name: "주니어 스위트, 싱글침대 2개",
        images: [
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/66853c13_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/66853c13_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/c6bc3985_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/c6bc3985_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/698c4c99_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/698c4c99_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/7158a032_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/7158a032_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_b.jpg",
          },
          {
            caption: "객실 전망",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/fdee7f8f_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/fdee7f8f_b.jpg",
          },
          {
            caption: "욕실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/48fa7862_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/48fa7862_b.jpg",
          },
        ],
        maxOccupancy: {
          children: 2,
          total: 3,
          messageChildren: "(최대 아동 2명 포함)",
          messageTotal: "숙박 가능 인원: 최대 3명",
        },
        additionalInfo: {
          description:
            "<p><strong>싱글침대 2개</strong></p><p>58 제곱미터 크기의 객실, 시내 전망</p><br/><p><b>구조</b> - 별도의 좌석 공간</p><p><b>휴식</b> - 객실 내 마사지 이용 가능</p><p><b>인터넷</b> - 무료 WiFi 및 유선 인터넷</p><p><b>엔터테인먼트</b> - 프리미엄 채널 시청이 가능한 55인치 TV</p><p><b>식음료</b> - 미니냉장고, 미니바, 에스프레소 메이커 및 24시간 룸서비스</p><p><b>편안한 잠자리</b> - 오리/거위털 이불, 암막 커튼, 턴다운 서비스 및 침대 시트 </p><p><b>욕실</b> - 전용 욕실, 전신 욕조 및 레인폴 샤워기가 있는 별도의 샤워실</p><p><b>기타 편의 시설</b> - 금고, 다리미/다리미판, 노트북 작업 공간, 요청 시 간이/추가 침대와 무료 유아용 침대 이용 가능</p><p><b>편의 서비스/시설</b> - 에어컨, 하우스키핑(매일) 및 난방</p><p><b>장애인 편의 시설</b> - 레버식 문손잡이 및 도어벨/전화 알림</p><p>금연, 2020년 12월에 리노베이션됨</p><p>연결/인접 객실을 요청하실 수 있으며, 이용 상황에 따라 달라질 수 있습니다. </p>",
          details: {
            amenities: [
              "TV",
              "가이드북 또는 추천 정보",
              "각각 다른 스타일의 객실",
              "객실 금고",
              "객실 내 마사지 서비스 가능",
              "객실 연결/인접 가능",
              "고급 세면용품",
              "난방",
              "노트북 작업 공간",
              "다리미/다리미판",
              "도어벨/전화 알림",
              "레버식 문손잡이",
              "레스토랑 다이닝 가이드",
              "레인폴 샤워기",
              "룸서비스(24시간)",
              "리넨 제공됨",
              "매일 하우스키핑",
              "목욕가운",
              "무료 WiFi",
              "무료 생수",
              "무료 세면용품",
              "무료 유선 인터넷",
              "무료 유아용 침대",
              "미니 냉장고",
              "미니바",
              "방음 객실",
              "별도의 욕조와 샤워",
              "별도의 좌석 공간",
              "비누",
              "비데",
              "샴푸",
              "슬리퍼",
              "암막 커튼",
              "에스프레소 메이커",
              "에어컨",
              "오리/거위털 이불",
              "옷장",
              "욕실 수 - 1",
              "위성 TV 서비스",
              "전신 욕조",
              "전용 욕실",
              "전화",
              "책상",
              "칫솔/치약 제공",
              "커피/티 메이커",
              "타월 제공됨",
              "턴다운 서비스",
              "프리미엄 TV 채널",
              "헤어드라이어",
              "현지 지도",
              "화장지",
            ],
          },
        },
        ratePlans: [
          {
            occupancy: {
              maxAdults: 3,
              maxChildren: 0,
            },
            cancellation: {
              title: "무료 취소",
              free: true,
              info: "이 예약은 2021/12/25까지 무료로 취소가 가능합니다. 이 날짜 이후에 예약을 취소 또는 변경하시는 경우 수수료가 부과될 수 있습니다. 또한, 예정보다 일찍 체크아웃하거나 노쇼인 경우 환불되지 않습니다.",
              additionalInfo: "2021년 12월 25일까지",
              cancellationDate: "2021-12-25Z",
              refundable: true,
            },
            cancellations: [
              {
                title: "무료 취소",
                free: true,
                info: "이 예약은 2021/12/25까지 무료로 취소가 가능합니다. 이 날짜 이후에 예약을 취소 또는 변경하시는 경우 수수료가 부과될 수 있습니다. 또한, 예정보다 일찍 체크아웃하거나 노쇼인 경우 환불되지 않습니다.",
                additionalInfo: "2021/12/25까지",
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "2인 아침 식사 포함",
                info: "숙박에 2인 아침 식사가 포함되어 있습니다.",
                dataSourceInfo: "bca8bea3-b1fd-4db8-8c3d-7fdeb8ef9e7e",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩420,000",
              unformattedCurrent: 420000,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩420,000",
                  },
                  {
                    heading: "총 2박",
                    value: "₩840,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩840,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "12",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381100943",
                      roomTypeCode: "314007995",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..TJRmYzdkgDBoLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩420,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩840,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..TJRmYzdkgDBoLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩420,000",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩840,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..TJRmYzdkgDBoLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|314007995|381100943",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|355.6850324350875|355.6850324350875|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
        ],
      },
      {
        name: "스위트, 킹사이즈침대 1개 (Intercontinental)",
        images: [
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/89048137_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/89048137_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/5e673428_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/c155e4d3_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/c155e4d3_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/c674dfa8_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/c674dfa8_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/ccd4cb3d_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/ccd4cb3d_b.jpg",
          },
          {
            caption: "객실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/d5a71561_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/d5a71561_b.jpg",
          },
          {
            caption: "객실 용품 및 서비스",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2cb6bc3f_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/2cb6bc3f_b.jpg",
          },
          {
            caption: "객실 전망",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/b33fce20_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/b33fce20_b.jpg",
          },
          {
            caption: "객실 전망",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/edc1fe07_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/edc1fe07_b.jpg",
          },
          {
            caption: "욕실",
            thumbnailUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/48fa7862_e.jpg",
            fullSizeUrl:
              "https://exp.cdn-hotels.com/hotels/1000000/30000/22600/22529/48fa7862_b.jpg",
          },
        ],
        maxOccupancy: {
          children: 1,
          total: 2,
          messageChildren: "(최대 아동 1명 포함)",
          messageTotal: "숙박 가능 인원: 최대 2명",
        },
        additionalInfo: {
          description:
            "<p><strong>킹사이즈침대 1개</strong></p><p>60 제곱미터 크기의 객실, 시내 전망</p><br/><p><b>클럽층</b> - 클럽 라운지 이용, 뷔페 아침 식사 및 라운지에서 인터넷 사용, 만 13 세 미만 고객 라운지 이용 불가</p><p><b>구조</b> - 별도의 좌석 공간</p><p><b>휴식</b> - 객실 내 마사지 이용 가능</p><p><b>인터넷</b> - 무료 WiFi 및 유선 인터넷</p><p><b>엔터테인먼트</b> - 프리미엄 채널 시청이 가능한 55인치 TV</p><p><b>식음료</b> - 미니냉장고, 미니바, 에스프레소 메이커 및 24시간 룸서비스</p><p><b>편안한 잠자리</b> - 오리/거위털 이불, 암막 커튼, 턴다운 서비스 및 침대 시트 </p><p><b>욕실</b> - 전용 욕실, 전신 욕조 및 레인폴 샤워기가 있는 별도의 샤워실</p><p><b>기타 편의 시설</b> - 금고, 다리미/다리미판, 노트북 작업 공간, 요청 시 간이/추가 침대와 무료 유아용 침대 이용 가능</p><p><b>편의 서비스/시설</b> - 에어컨, 하우스키핑(매일) 및 난방</p><p><b>장애인 편의 시설</b> - 레버식 문손잡이 및 도어벨/전화 알림</p><p>금연, 2020년 12월에 리노베이션됨</p><p>연결/인접 객실을 요청하실 수 있으며, 이용 상황에 따라 달라질 수 있습니다. </p>",
          details: {
            amenities: [
              "TV",
              "가이드북 또는 추천 정보",
              "각각 다른 스타일의 객실",
              "객실 금고",
              "객실 내 마사지 서비스 가능",
              "객실 연결/인접 가능",
              "고급 세면용품",
              "난방",
              "노트북 작업 공간",
              "다리미/다리미판",
              "도어벨/전화 알림",
              "레버식 문손잡이",
              "레스토랑 다이닝 가이드",
              "레인폴 샤워기",
              "룸서비스(24시간)",
              "리넨 제공됨",
              "매일 하우스키핑",
              "목욕가운",
              "무료 WiFi",
              "무료 생수",
              "무료 세면용품",
              "무료 유선 인터넷",
              "무료 유아용 침대",
              "미니 냉장고",
              "미니바",
              "방음 객실",
              "별도의 욕조와 샤워",
              "별도의 좌석 공간",
              "비누",
              "비데",
              "샴푸",
              "슬리퍼",
              "암막 커튼",
              "에스프레소 메이커",
              "에어컨",
              "오리/거위털 이불",
              "옷장",
              "욕실 수 - 1",
              "위성 TV 서비스",
              "전신 욕조",
              "전용 욕실",
              "전화",
              "책상",
              "칫솔/치약 제공",
              "커피/티 메이커",
              "타월 제공됨",
              "턴다운 서비스",
              "프리미엄 TV 채널",
              "헤어드라이어",
              "현지 지도",
              "화장지",
            ],
          },
        },
        ratePlans: [
          {
            occupancy: {
              maxAdults: 2,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "아침 식사 추가 가능(현장에서 결제)",
                info: "아침 식사는 성인의 경우 약 KRW 59000, 아동의 경우 약 KRW 29500의 추가 요금을 내고 이용하실 수 있습니다.",
                dataSourceInfo: "2336db56-4751-406e-a853-c03b27a4ccb9",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩433,500",
              unformattedCurrent: 433500,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩433,500",
                  },
                  {
                    heading: "총 2박",
                    value: "₩867,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩867,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "13",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381100239",
                      roomTypeCode: "314007991",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..N_S94V-ZqaRoLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩433,500",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩867,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..N_S94V-ZqaRoLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩433,500",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩867,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..N_S94V-ZqaRoLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|314007991|381100239",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|367.1177656205010|367.1177656205010|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
          {
            occupancy: {
              maxAdults: 2,
              maxChildren: 0,
            },
            cancellation: {
              title: "취소 정책",
              free: false,
              info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
              refundable: true,
            },
            cancellations: [
              {
                title: "취소 정책",
                free: false,
                info: '<ul class="cancellation_penalty_rule_list"><li>2021/12/27, 오전 9:00(GMT) 이전에 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</li></ul> 노쇼 또는 일찍 체크아웃하시는 경우 환불해 드리지 않습니다.',
                period: "2박: 2021/12/27 ~ 2021/12/29",
                refundable: true,
              },
            ],
            features: [
              {
                featureType: "wifi",
                title: "무료 WiFi",
                info: "이 객실에는 무료 WiFi가 제공됩니다.",
                dataSourceInfo: "1dc3313f-9d1b-4886-8226-12ae4c1b3571",
              },
              {
                featureType: "breakfast",
                title: "2인 아침 식사 포함",
                info: "숙박에 2인 아침 식사가 포함되어 있습니다.",
                dataSourceInfo: "bca8bea3-b1fd-4db8-8c3d-7fdeb8ef9e7e",
              },
            ],
            welcomeRewards: {
              info: "저희 회원혜택 프로그램으로 스탬프 10개를 모으면 리워드* 1박 혜택을 드립니다. 또한, 이 객실 예약에 리워드* 숙박을 사용하실 수 있어요.",
              collect: true,
              redeem: true,
            },
            offers: {
              valueAdds: [],
            },
            price: {
              current: "₩493,500",
              unformattedCurrent: 493500,
              info: "객실당 1박 요금",
              nightlyPriceBreakdown: {
                additionalColumns: [
                  {
                    heading: "(평균)",
                    value: "₩493,500",
                  },
                  {
                    heading: "총 2박",
                    value: "₩987,000",
                  },
                ],
                nightlyPrices: [],
              },
              totalPricePerStay: "(2박 요금: <strong>₩987,000</strong>)",
            },
            payment: {
              book: {
                caption: "예약",
                bookingParamsMixedRatePlan: {
                  init: true,
                  bookingApiVersion: "v3",
                  numberOfRoomType: "14",
                  orderItems: [
                    {
                      supplierType: "EXPEDIA",
                      rateCode: "381102061",
                      roomTypeCode: "314007991",
                      businessModel: "MERCHANT",
                      ratePlanConfiguration: "HYBRID",
                      arrivalDate: "2021/12/27",
                      departureDate: "2021/12/29",
                      destinationId: "759818",
                      hotelCityId: "759818",
                      hotelId: "116487",
                      sequenceNumber: "0",
                      tripId: "",
                      tspid: 24,
                    },
                  ],
                  propertyDetailsDisplayRate: "c..neXvjGVNukpoLWDlqm02vg..",
                  currency: "KRW",
                  minPrice: "c..-0qr7Dxo3_BoLWDlqm02vg..",
                  marketingChannelCode: "20",
                  interstitial: "",
                  priceConfigurationId: "18",
                },
                paymentPreference: {
                  options: {
                    payNow: {
                      displayedPrice: {
                        displayedPrice: "₩493,500",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩987,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      payInCurrency: true,
                      welcomeRewards:
                        "숙박을 적립하여 Hotels.com™ 호텔스닷컴 리워드* 숙박 혜택을 사용하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "MERCHANT",
                        displayedCurrentPrice: "c..neXvjGVNukpoLWDlqm02vg..",
                      },
                    },
                    payLater: {
                      displayedPrice: {
                        displayedPrice: "₩493,500",
                        totalPricePerStay:
                          "(2박 요금: <strong>₩987,000</strong>)",
                        priceInfo: "객실당 1박 요금",
                        approximated: false,
                      },
                      welcomeRewards:
                        "Hotels.com™ 호텔스닷컴 리워드* 숙박을 적립하실 수 있습니다.",
                      overrideBookingParams: {
                        businessModel: "AGENCY",
                        displayedCurrentPrice: "c..neXvjGVNukpoLWDlqm02vg..",
                      },
                    },
                  },
                  roomTracking: {
                    prop49: "116487|314007991|381102061",
                    prop71: "INT::Choice::CA::ETP Dep avail",
                    prop75:
                      "INT Dep|417.9299131112278|417.9299131112278|1|NA;ETP interstitial|prices equivalent",
                  },
                },
              },
              noCCRequired: false,
            },
            ratePlanDetails: {
              hideInstallments: false,
              localCurrencySuppression: false,
            },
          },
        ],
      },
    ],
    ratePlanWithOffersExists: false,
    priceColumnHeading: "오늘의 가격: 세금 및 수수료 불포함",
  },
  starRatingTitle:
    "고객 편의를 위해 저희 등급 시스템을 기준으로 해당 정보를 제공했습니다.  ",
  starRating: 5,
  featuredPrice: {
    pricingTooltip: "이는 선택하신 날짜의 1박 평균 요금입니다.",
    currentPrice: {
      formatted: "₩238,000",
      plain: 238000,
    },
    priceInfo: "객실당 1박 요금",
    totalPricePerStay: "(2박 요금: <strong>₩476,000</strong>)",
    priceSummary: "세금 및 수수료 불포함",
    taxInclusiveFormatting: false,
    bookNowButton: true,
  },
  mapWidget: {
    staticMapUrl:
      "https://maps-api-ssl.google.com/maps/api/staticmap?center=37.50846,127.061036&format=jpg&sensor=false&key=AIzaSyDaDqDNrxWrxcURixO2l6TbtV68X0Klf4U&zoom=16&size=834x443&scale&signature&signature=OoUofAeL_3UTcBY0KQnBc5yWtZA=",
  },
  roomTypeNames: [
    "",
    "",
    "",
    "",
    "",
    "클럽 스위트 (Grand)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "디럭스룸, 킹사이즈침대 1개 (Summer Package)",
    "",
    "",
    "스위트, 킹사이즈침대 1개 (Intercontinental)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "그랜드 스위트, 킹사이즈침대 1개",
    "클럽 스위트 (Executive)",
    "",
    "",
    "",
    "스위트",
    "",
    "",
    "",
    "디럭스룸, 킹사이즈침대 1개",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "클래식룸, 킹사이즈침대 1개, 장애인 지원, 비즈니스 라운지 이용 (Intercontinental Deluxe)",
    "",
    "",
    "",
    "",
    "",
    "",
    "프리미엄룸, 더블침대 2개",
    "",
    "",
    "주니어 스위트, 킹사이즈침대 1개",
    "",
    "클럽 스위트, 킹사이즈침대 1개",
    "",
    "클럽 스위트 (Ambassador)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "클럽 스위트, 킹사이즈침대 1개 (Residence, 만 12세 이하 어린이 라운지 이용불가)",
    "스위트, 킹사이즈침대 1개 (Residence)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "XD",
    "",
    "",
    "",
    "",
    "",
    "",
    "주니어 스위트, 킹사이즈침대 1개",
    "",
    "",
    "",
    "클럽 스위트, 침실 1개",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "클럽 스위트 (Presidential)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "스위트, 싱글침대 2개, 장애인 지원, 비즈니스 라운지 이용 (Intercontinental Junior)",
    "이그제큐티브 스위트, 킹사이즈침대 1개",
    "",
    "",
    "",
    "클래식룸, 킹사이즈침대 1개",
    "",
    "",
    "",
    "",
    "",
    "",
    "프리미어룸, 킹사이즈침대 1개",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "주니어 스위트, 싱글침대 2개",
    "",
    "",
    "",
    "",
    "클럽 프리미어룸, 킹사이즈침대 1개",
    "",
    "클럽 스위트, 코너",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "디럭스룸, 싱글침대 2개 (Summer Package)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "스위트, 킹사이즈침대 1개",
    "",
    "주니어 스위트, 킹사이즈침대 1개, 장애인 지원, 비즈니스 라운지 이용 (Intercontinental Junior)",
    "XD",
    "스위트, 킹사이즈침대 1개, 코너",
    "주니어 스위트, 더블침대 2개",
    "클럽 스위트 (Presidential)",
    "",
    "프리미어룸, 싱글침대 2개",
    "",
    "",
    "",
    "",
    "디럭스룸",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "스탠다드룸",
    "",
    "클래식룸, 싱글침대 2개",
    "",
    "",
    "프레지덴셜 스위트, 킹사이즈침대 1개",
    "",
    "클래식룸, 킹사이즈침대 1개, 장애인 지원 (Mobility Accessible)",
    "",
    "",
    "",
    "",
    "",
    "",
    "클럽룸, 킹사이즈침대 1개 (만 12세 이하 어린이 라운지 이용불가)",
    "클럽 스위트, 킹사이즈침대 1개 (Club Mountain Suite)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "클래식룸",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "디럭스룸, 싱글침대 2개",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "클래식룸, 킹사이즈침대 1개",
    "",
  ],
  tagline: [
    "<b>서울 올림픽 경기장 근처에 위치한 럭셔리 호텔, 3 개 레스토랑 보유 </b>",
  ],
  freebies: ["무료 WiFi 및 무료 주차"],
  reviews: {
    brands: {
      scale: 10,
      formattedScale: "10",
      rating: 9.4,
      formattedRating: "9.4",
      lowRating: false,
      badgeText: "최고 좋음",
      total: 686,
    },
  },
  atAGlance: {
    keyFacts: {
      hotelSize: ["550개 객실 보유", "34층 규모"],
      arrivingLeaving: [
        "체크인 시간: 15:00 ~ 자정",
        "체크아웃 시간:  11:00",
        "간편 체크아웃",
      ],
      specialCheckInInstructions: [
        "자정 이후에 도착 예정이신 경우 예약 확인 메일에 나와 있는 연락처로 미리 숙박 시설에 연락해 주시기 바랍니다. 도착 시 프런트 데스크 직원이 도와드립니다. 자세한 내용은 예약 확인 메일에 나와 있는 연락처 정보로 숙박 시설에 문의해 주시기 바랍니다. 클럽 객실 유형 예약 시 최대 2명까지 클럽 라운지를 이용하실 수 있습니다. 추가 고객에 대해서는 별도 요금이 적용됩니다.",
      ],
      requiredAtCheckIn: [
        "부대 비용에 대비해 신용카드, 직불카드 또는 현금 보증금 필요",
        "사진이 부착된 정부 발행 신분증이 필요할 수 있음",
        "체크인 가능한 나이: 만 19세부터",
      ],
    },
    travellingOrInternet: {
      travelling: {
        children: ["탁아/어린이 돌봄 서비스*"],
        pets: ["반려동물 동반 불가(장애인 안내 동물은 동반 가능)"],
        extraPeople: [],
      },
      internet: [
        "공용 구역에서 무료 WiFi 및 유선 인터넷 제공",
        "객실 내 무료 WiFi 및 유선 인터넷",
      ],
    },
    transportAndOther: {
      transport: {
        transfers: [],
        parking: [
          "<em>무료</em> 시설 내 셀프 주차",
          "시설 내 주차 대행(숙박 기간 내 1회 KRW 25000)",
          "시설 내 휠체어로 이용 가능한 주차장",
        ],
        offsiteTransfer: [],
      },
      otherInformation: ["금연 숙박 시설"],
      otherInclusions: [],
    },
  },
  amenities: [
    {
      heading: "호텔 내 정보",
      listItems: [
        {
          heading: "어린이 동반 시",
          listItems: ["어린이 돌보미/활동 감독(요금 별도)"],
        },
        {
          heading: "식음료",
          listItems: [
            "매일 뷔페 아침 식사(요금 별도)",
            "3 개 레스토랑",
            "바/라운지",
            "커피숍/카페",
            "24시간 룸서비스",
          ],
        },
        {
          heading: "휴식",
          listItems: [
            "실내 수영장 수 - 1",
            "피트니스 시설",
            "스파 욕조 수 -  1",
            "스팀룸",
            "헬스클럽",
            "사우나",
          ],
        },
        {
          heading: "비즈니스 지원",
          listItems: [
            "회의실 수 - 8",
            "회의 공간",
            "회의 공간 크기(ft) -  7158",
            "회의 공간 크기(m) -  665",
            "컴퓨터 스테이션",
          ],
        },
        {
          heading: "서비스",
          listItems: [
            "24시간 운영 프런트 데스크",
            "콘시어지 서비스",
            "투어/티켓 안내",
            "드라이클리닝/세탁 서비스",
            "세탁 시설",
            "로비에서 무료 신문 제공",
            "짐 보관 서비스",
            "웨딩 서비스",
            "다국어 구사 가능 직원",
            "포터/벨보이",
          ],
        },
        {
          heading: "시설",
          listItems: [
            "빌딩/타워 수 -  1",
            "엘리베이터",
            "ATM/은행업무",
            "프런트 데스크의 안전 금고",
          ],
        },
        {
          heading: "장애인 편의 시설",
          listItems: [
            "점자표지",
            "장애인 지원 욕실",
            "객실 내 장애인 편의 시설",
            "롤인 샤워",
            "휠체어로 이용 가능한 통로",
            "휠체어로 이용 가능한 주차장",
            "휠체어로 이용 가능한 공용 화장실",
            "휠체어로 이용 가능한 콘시어지 데스크",
            "휠체어가 장착된 차량의 주차 대행",
            "엘리베이터까지 휠체어 통로",
            "휠체어로 이용 가능한 등록 데스크",
            "휠체어로 이용 가능한 회의 공간/비즈니스 센터",
            "휠체어로 이용 가능한 시설 내 레스토랑",
            "휠체어로 이용 가능한 라운지",
            "복도 난간",
            "계단 난간",
            "시설 내 휠체어 이용 가능",
            "도어벨/전화 알림",
            "레버식 문손잡이",
          ],
        },
        {
          heading: "사용 언어",
          listItems: ["영어", "일본어", "중국어", "한국어"],
        },
      ],
    },
    {
      heading: "객실 내 정보",
      listItems: [
        {
          heading: "편의 시설",
          listItems: [
            "에어컨",
            "미니바",
            "에스프레소 메이커",
            "커피/티 메이커",
            "목욕가운",
            "슬리퍼",
            "다리미/다리미판",
          ],
        },
        {
          heading: "편안한 잠자리",
          listItems: [
            "오리/거위털 이불",
            "암막 커튼",
            "방음 객실",
            "턴다운 서비스",
          ],
        },
        {
          heading: "휴식",
          listItems: [
            "객실 내 마사지 서비스 가능",
            "각각 다른 스타일의 객실",
            "별도의 좌석 공간",
          ],
        },
        {
          heading: "욕실 편의 시설",
          listItems: [
            "전용 욕실",
            "전신 욕조",
            "레인폴 샤워기",
            "비데",
            "고급 세면용품",
            "헤어드라이어",
          ],
        },
        {
          heading: "엔터테인먼트",
          listItems: ["55인치 TV", "프리미엄 TV 채널"],
        },
        {
          heading: "인터넷/비즈니스",
          listItems: ["책상", "무료 WiFi", "전화"],
        },
        {
          heading: "식음료",
          listItems: ["무료 생수"],
        },
        {
          heading: "기타 서비스",
          listItems: ["매일 하우스키핑", "객실 금고", "객실 연결/인접 가능"],
        },
      ],
    },
  ],
  hygieneAndCleanliness: {
    title: "코로나19 관련: 위생 및 청결",
    hygieneQualifications: {
      title: "공식 표준",
      qualifications: [
        "이 숙박 시설은 Clean Promise(IHG) 및 Bureau Veritas(제3자 전문업체 - 글로벌)의 청소 및 소독 지침을 준수합니다. ",
      ],
    },
    healthAndSafetyMeasures: {
      title: "강화된 보건 및 안전 조치",
      description:
        "이 숙박 시설은 현재 강화된 청소 및 고객 안전 조치를 시행하고 있습니다.",
      measures: [
        "숙박 시설을 소독제로 청소함",
        "직원이 개인 보호 장비 착용함",
        "숙박 시설에서 현재 강화된 청소 조치 시행 중",
        "주요 접촉 구역에 고객과 직원 간 가림막 있음",
        "사회적 거리두기 시행 중",
        "고객 투숙 간 공실 기간 있음24시간",
        "고객에게 방호복 제공 가능",
        "고객에게 마스크 제공 가능",
        "고객에게 장갑 제공 가능",
        "개별 포장 음식 옵션 이용 가능",
        "고객에게 무료 손 소독제 제공",
      ],
    },
  },
  smallPrint: {
    alternativeNames: [
      "인터컨티넨탈 그랜드 서울 파르나스",
      "Intercontinental Seoul",
      "Grand InterContinental Parnas Hotel",
      "Grand InterContinental Parnas",
      "그랜드 인터컨티넨탈 서울 파르나스 호텔",
      "InterContinental Grand Seoul Parnas",
      "Grand InterContinental Seoul Parnas",
      "Grand InterContinental Seoul Parnas, an IHG Hotel Hotel",
      "그랜드 인터컨티넨탈 서울 파르나스 서울",
      "Grand InterContinental Seoul Parnas, an IHG Hotel Seoul",
      "Grand InterContinental Seoul Parnas, an IHG Hotel Hotel Seoul",
      "그랜드 인터컨티넨탈 서울 파르나스 호텔 서울",
      "InterContinental Seoul Grand",
      "InterContinental Seoul Grand Parnas",
      "Seoul Grand InterContinental",
      "Seoul Grand InterContinental Parnas",
      "Grand Intercontinental Seoul Parnas Hotel Seoul",
    ],
    mandatoryFees: [],
    optionalExtras: [
      "<p>추가 요금으로 <strong>이른 체크인</strong> 가능(객실 상황에 따라 다름, 요금 변동)</p><p>추가 요금으로 <strong>늦은 체크아웃</strong> 가능(객실 상황에 따라 다름, 요금 변동)</p>",
      "<p>1박 기준, 1인당 KRW 27500의 요금으로 <strong>사우나</strong> 이용이 가능합니다. </p><p><strong>주차 대행</strong> 요금은 숙박 기간 내 1회 KRW 25000입니다.</p>",
      "<p>1박 기준, KRW 84700.0의 요금으로 <strong>간이 침대</strong> 이용 가능</p>",
      "<p><strong>뷔페 아침 식사</strong>를 성인은 KRW 59000, 어린이는 KRW 29500의 별도 요금(대략적인 금액)으로 제공</p>",
      "<p><strong>탁아 서비스/어린이 돌보미 서비스</strong>는 추가 요금으로 이용하실 수 있습니다.</p>",
    ],
    policies: [
      "<p>만 19세 미만의 고객은 부모 또는 보호자를 동반해야 합니다.<br/>\n이 숙박 시설은 부모가 동반하는 경우라 하더라도 만 12세 이하 아동(또는 초등학생)의 클럽 라운지 또는 수영장 출입을 허용하지 않습니다. 만 13~18세 아동은 수영장 출입이 가능하지만 부모 또는 보호자와 함께 입장해야 합니다.</p>",
      "<p>이 숙박 시설에서는 이용 상황에 따라 객실 연결이 가능하며, 예약 확인 메일에 나와 있는 번호로 숙박 시설에 직접 연락하여 요청하실 수 있습니다. </p><p>등록된 고객만 객실에 허용됩니다. </p><p>일부 시설의 경우 출입이 제한될 수 있습니다. 자세한 내용은 예약 확인 메일에 나와 있는 연락처 정보로 해당 숙박 시설에 직접 문의하실 수 있습니다. </p><p>만 12 세 미만은 수영장, 헬스클럽 또는 피트니스 시설에 입장하실 수 없습니다. </p><p>시설 내에 일산화탄소 감지기, 소화기, 연기 감지기, 보안 시스템, 방범창 등이 갖춰져 있습니다.</p><p>이 숙박 시설은 현재 강화된 청소 및 고객 안전 조치를 시행 중입니다.</p> <p>숙박 시설 청소에 소독제를 사용, 고객 숙박 간에 자주 접촉되는 표면을 소독제로 청소, 침대 시트 및 타월을 최소 60℃에서 세탁, 청소 후 정전기식 분무기로 소독 등의 조치를 취하고 있습니다.</p><p>고객에게 개인 보호 장비(마스크 및 장갑 포함) 제공이 가능합니다.</p> <p>사회적 거리두기, 숙박 시설 직원의 개인 보호 장비 착용, 주요 접촉 구역에 직원과 고객 간 가림막 설치, 정기적으로 직원 체온 측정, 고객 체온 측정 가능, 고객에게 손 소독제 제공, 모든 거래에 무현금 결제 가능, 비대면 룸서비스 가능, 공용 구역에서 마스크 착용 필수</p>\n<p>비대면 체크아웃 서비스를 이용하실 수 있습니다.</p><p>강화된 식품 안전 서비스를 시행 중입니다.</p><p>개별 포장된 음식 옵션이 아침, 점심 및 저녁 식사와 룸서비스를 통해서도 제공됩니다.</p> <p>각 객실은 예약 간에 최소 24시간 동안 공실로 유지됩니다.</p> <p>이 숙박 시설은 Clean Promise(IHG)의 청소 및 소독 지침을 준수합니다. </p><p>이 숙박 시설은 Bureau Veritas(제3자 전문업체 - 글로벌)의 청소 및 소독 지침을 준수합니다. </p><p> 이 숙박 시설에서는 고객의 모든 성적 지향과 성 정체성을 존중합니다(성소수자 환영). </p>고객 정책과 문화적 기준이나 규범은 국가 및 숙박 시설에 따라 다를 수 있습니다. 명시된 정책은 숙박 시설에서 제공했습니다. ",
      "<p>이 숙박 시설에서는 신용카드로 결제하실 수 있습니다. 현금은 받지 않습니다. </p>",
    ],
    mandatoryTaxesOrFees: false,
    display: true,
  },
  specialFeatures: {
    sections: [
      {
        heading: "다이닝",
        freeText:
          "<strong>Hakone</strong> - 일식 전문 레스토랑이며 아침 식사, 점심 식사 및 저녁 식사를 제공합니다. 바에서 음료를 즐기실 수 있습니다. 미리 예약하셔야 합니다. 매일 운영됩니다. <br/>\n<p></p><strong>Lobby Lounge and Bar</strong> - 이 바에서는 점심 식사 및 가벼운 식사를 제공합니다. 매일 운영됩니다. <br/>\n<p></p><strong>Grand Kitchen</strong> - 현지 및 세계 각국의 요리 전문 뷔페 레스토랑이며 아침 식사, 점심 식사 및 저녁 식사를 제공합니다. 매일 운영됩니다. <br/>\n<p></p><strong>Wei Lou</strong> - 중식 전문 고급 레스토랑이며 점심 식사 및 저녁 식사를 제공합니다. 매일 운영됩니다. ",
        listItems: [],
        subsections: [],
      },
      {
        heading: "수상 내역 및 제휴",
        freeText:
          "<strong>친환경 숙박 시설 </strong><br /> 이곳은EarthCheck에 참여하는 숙박 시설로, 이 프로그램은 환경, 지역 사회, 문화 유산, 지역 경제 중 하나 이상에 숙박 시설이 미치는 영향을 평가합니다. ",
        listItems: [],
        subsections: [],
      },
    ],
  },
  overview: {
    overviewSections: [
      {
        title: "주요 편의 시설",
        type: "HOTEL_FEATURE",
        content: [
          "550개의 금연 객실",
          "매일 하우스키핑",
          "3 개 레스토랑 및 바/라운지",
          "1 실내 수영장",
          "아침 식사 가능",
          "헬스클럽",
          "주차 대행",
          "8 개의 회의실/컨퍼런스룸",
          "어린이 돌보미",
          "24시간 운영 프런트 데스크",
          "에어컨",
          "시설 내 렌터카 서비스",
          "무료 WiFi 및 무료 주차",
        ],
        contentType: "LIST",
      },
      {
        title: "주변 명소",
        type: "LOCATION_SECTION",
        content: [
          "강남에 위치",
          "서울 올림픽 경기장(걸어서 23분 거리)",
          "롯데월드(4.2km)",
          "올림픽 공원(5.2km)",
          "동대문역사문화공원(9.8km)",
          "N서울타워(11.3km)",
          "서울특별시청(12.4km)",
          "남대문시장(13.1km)",
          "경복궁(13.8km)",
        ],
        contentType: "LIST",
      },
      {
        type: "TAGLINE",
        content: [
          "<b>서울 올림픽 경기장 근처에 위치한 럭셔리 호텔, 3 개 레스토랑 보유 </b>",
        ],
        contentType: "LIST",
      },
      {
        type: "HOTEL_FREEBIES",
        content: ["무료 WiFi 및 무료 주차"],
        contentType: "LIST",
      },
    ],
  },
  transportation: {
    transportLocations: [
      {
        category: "airport",
        locations: [
          {
            name: "서울 (ICN-인천국제공항)까지 차로",
            distance: "71.6km",
            distanceInTime: "55분",
          },
          {
            name: "서울 (GMP-김포국제공항)까지 차로",
            distance: "28.2km",
            distanceInTime: "26분",
          },
        ],
      },
      {
        category: "train-station",
        locations: [
          {
            name: "안양 역까지 차로",
            distance: "21.3km",
            distanceInTime: "20분",
          },
          {
            name: "수원 역까지 차로",
            distance: "35.3km",
            distanceInTime: "26분",
          },
          {
            name: "행신 역까지 차로",
            distance: "31km",
            distanceInTime: "27분",
          },
        ],
      },
      {
        category: "metro",
        locations: [
          {
            name: "삼성역까지 걸어서",
            distance: "0.2km",
            distanceInTime: "3분",
          },
          {
            name: "봉은사역까지 걸어서",
            distance: "0.8km",
            distanceInTime: "10분",
          },
          {
            name: "종합운동장역까지 걸어서",
            distance: "1.1km",
            distanceInTime: "13분",
          },
        ],
      },
    ],
  },
  neighborhood: {
    neighborhoodName: "명동",
    neighborhoodImage:
      "https://a.cdn-hotels.com/gdcs/production75/d488/7af20c30-1846-11e7-8f36-0242ac110004.jpg",
    neighborhoodShortDescription:
      "명동은 대한민국 최고의 쇼핑 명소 중 하나이죠. 이곳에서는 수많은 현지 상점, 현대적 백화점과 트렌디한 클럽은 물론 명동성당도 구경하실 수 있습니다.",
    neighborhoodLongDescription:
      "명동에서는 강변 경치 및 풍부한 문화 등이 유명하죠. 이곳에 가시면 롯데백화점 및 남산공원 등의 인기 명소에 꼭 들러보세요. 서울에서 생동감이 느껴지는 이 지역은 축제, 레스토랑, 카페 등으로 유명하답니다. <br/><br/>쇼핑을 즐길만한 곳으로는 명동거리 및 눈 스퀘어 등이 있습니다. 성 및 성당 등으로 유명한 이 지역의 인기 랜드마크인 서울광장 및 서울 국제 파이낸스 센터에 가보세요. ",
  },
};

export default hotelDetail;
