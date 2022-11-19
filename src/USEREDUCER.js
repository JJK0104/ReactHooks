import React, { useState, useReducer } from "react";

// 2)
// 컴포넌트 밖에다 useReducer의 첫번째 인자로 들어갈 reducer라는 함수를 만들어줌
// reducer함수는 2가지 인자를 받는데, 첫번째 인자는 현재 state를 받고 두번째 인자로는 action을 받는다
// 첫번째 인자 state 안에는 reducer 함수가 불리는 시점에 money state 안에 들어가 있는 값이 들어가게 됨
// 두번째 인자 action은 reducer에게 state를 변경해달라고 요구할 때 그 요구에 대한 내용이 들어감
const reducer = (state, action) => {
  console.log("reducer가 일을 합니다!", state, action);
  // 5)
  // reducer는 action에 나와있는 내용대로 state를 update 시켜줘야됨
  // reducer가 return 하는 값은 새로 update될 state가 되는 거
  // reducer 안에 보통 action에 들어있는 타입에 따라 if-else문이나 switch문 많이 씀
  // useReducer의 정말 좋은 점이 뭐냐면 reducer는 전달받은 action 대로만 state를 update 시켜줌
  switch (action.types) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

function USEREDUCER() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  // 1)
  // useReducer는 useState과 비슷하게 배열을 하나 반환해주는데
  // 이 배열의 첫번째 요소에는 새로 만들어준 state가 들어있고
  // 두번째 요소에는 useReducer가 만들어준 dispatch함수가 들어있다
  // 그리고 useReducer는 인자를 2개 받는데 첫번째 인자는 reducer를 받고 두번째 인자는 money state에 들어갈 초기값을 받는다
  return (
    <div>
      <h3>useReducer 은행에 오신 것을 환영합니다</h3>
      <p>잔고 : {money}원</p>
      {/* 
      3) 우리가 뭘 했냐면 useReducer를 통해 money라는 state를 만들어줬고
      money라는 state는 잔고에 얼마가 있는지 나타내는 기록이다
      이 money state는 우리가 만든 reducer를 통해서만 수정이 된다. 그리고 이 reducer는 우리가 만든 useReducer의 인자로 전달됨
      우리가 이 reducer를 통해서 money state를 수정하고 싶을 때마다 우리는 dispatch를 불러줄 거다. 이 dispatch는 useReducer가
      만들어준 함수인데 인자로 action을 넣어줌. 우리가 나중에 dispatch를 호출하면 reducer가 호출이 되는데 reducer의 인자로 action이 전달됨
      그러면 그 action을 토대로 state를 변경해줌
      */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ types: "deposit", payload: number });
          // 4)
          // dispatch : state를 update시키고 싶을 때 Reducer에 하는 요구

          // 예금 버튼 누를 때마다 dispatch를 부름. dispatch를 부르면 reducer가 불림
          // action은 보통 object 형태로 보냄. 그리고 이 object 안에 type을 넣고 이 type 안에는 reducer에게 요구하고 싶은 내용을
          // 넣으면 된다. 지금 우리는 예금을 하고 싶으니까 여기다 "예금을 하겠습니다"라고 넣으면 된다.
          // 근데 지금 우리가 하고 싶은 일은 input에 들어있는 숫자만큼 money state를 증가시켜서 잔고: {}원에 보여주고 싶은 거
          // 그래서 우리는 action 안에다 한가지를 더 추가할 건데 바로 payload다
          // payload 안에다 input에 들어있는 값을 넣으면 된다. 바로 우리의 number state
          setNumber(0);
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ types: "withdraw", payload: number });
          setNumber(0);
        }}
      >
        출금
      </button>
    </div>
  );
}

export default USEREDUCER;
