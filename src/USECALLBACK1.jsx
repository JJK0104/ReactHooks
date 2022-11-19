import { useEffect, useState, useCallback } from "react";

export default function USECALLBACK1() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true)

  //   // number state 변경 -> 리랜더링 -> 함수 새로 생성
  //   // someFunction의 참조값 변경 -> useEffect 콜백함수 호출
  //   const someFunction = () => {
  //     console.log(`someFunc : number: ${number}`);
  //     return;
  //   };

  const someFunction = useCallback(() => {
    console.log(`someFunc : number: ${number}`);
    return;
  }, [number]); // 의존성 배열을 빈배열로 하면 우리가 함수를 memoization 해줬을 당시의 number state는 0 이었다
  // 그래서 이후에 number state가 5로 바뀌었어도 memoization 된 함수안의 number에는 계속해서 0이 들어있다. 
  // number state가 update 될 때마다 memoization 된 함수도 update 시켜주고 싶으면 의존성배열에 number 넣으면 된다.
  // number state가 바뀔 때마다 함수가 갱신된다. 다시 만들어져서 someFunction을 초기화해준다.

  // JS 클로저
  // number state 변경 -> 리랜더링 -> 컴포넌트 함수 호출 -> 새로운 실행컨텍스트, 렉시컬 환경 생성
  // memoization 된 콜백함수의 [[Environment]]는 이전 렉시컬 환경을 참조하고 있다. 

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={()=>{setToggle(!toggle)}}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}
