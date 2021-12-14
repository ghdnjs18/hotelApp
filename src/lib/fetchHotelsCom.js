// 서버에서 데이터를 가져올때 자주 사용하기 때문에 헬퍼 함수로 미리
// 정의해둔 다음에 사용한다.
const fetchHotelsCom = async (url) => {
  try {
    return await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
        // 나중에 자신의 키로 변경해야한다.
        // "x-rapidapi-key": "26fb175c66msh4ef16cba57a9a16p1df633jsnb7dfe2a4b6c7",
        "x-rapidapi-key": "b232b1f46dmsh77ad8bce361b5d3p1bc205jsn1080db999b8e",
      },
    }).then((res) => res.json());
  } catch (e) {
    return e;
  }
};

export default fetchHotelsCom;
