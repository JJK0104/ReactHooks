import React, { useEffect, useMemo, useState } from "react";

function USEMEMO2() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return { country: isKorea ? "한국" : "외국" };
  }, [isKorea]);

    // const location = { country: isKorea ? "한국" : "외국" }; // rendering happens -> object address change -> location에 들어있는 주소값이 바뀜 -> useEffect 실행
    // // useMemo를 안 쓰고 그냥 이렇게 선어하면 number state를 변경해줘도 location이 계속 바뀌기 때문에(ob고 주소ject는 값을 저장하는 게 아니를 저장하니까)
    // // useEffect 계속 호출됨
  console.log("before useEffect");

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  console.log("after useEffect");

  return (
    <div>
      <h1> useMemo 예제2 </h1>
      <h2> 하루에 몇끼 먹어요? </h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default USEMEMO2;
