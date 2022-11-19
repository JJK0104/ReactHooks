import React, {useMemo, useState} from 'react';

const hardCalculate = (number) => {
    console.log('어려운 계산!');
    for (let i = 0; i < 999999999 ; i++){} // 의미없는 루프
    return number + 10000;
};

const easyCalculate = (number) => {
    console.log('짱쉬운 계산!');
    return number + 1;
};

// 함수형 컴포넌트는 말 그대로 함수다 
// 컴포넌트가 랜더링 된다는 것은 이 USEMEMO라는 함수가 호출이 된다는 거다 
// 함수가 호출이 되면 함수 내부의 변수는 초기화가 된다 
// 그렇기 때문에 USEMEMO 컴포넌트가 반복적으로 랜더링이 된다면 
// 안에 있는 hardSum 이라는 변수도 계속적으로 초기화가 되고 그 말은 hardCalculate라는 함수가 반복적으로 불려서 
// hardSum이라는 변수에다 반복적으로 값을 할당해준다는 얘기 
function USEMEMO(){
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    // const hardSum = hardCalculate(hardNumber) 

    // useMemo는 두가지 인자를 받는다 
    // 첫번째 인자는 콜백함수를 받는다. 콜백함수 리턴값으로 우리가 메모아이즈 할 값을 주면 된다 
    // 두번째 인자는 디펜던시 배열을 받는다. 배열안의 값이 바뀔 때만 콜백함수를 다시 호출해서 
    // hardSum에다 할당해준다
    const hardSum = useMemo(()=>{
        return hardCalculate(hardNumber)
    },[hardNumber]) // hardNumber가 변경이 되야지만 hardCalculate함수가 다시 불려져 hardSum을 초기화 해줌
                    // 만약 hardNumber가 변경되지 않았다면 이미 그 전에 갖고 있던 hardSum의 값을 재사용

    const easySum = easyCalculate(easyNumber)

    return(
        <div>
            <h1>useMemo</h1>
            <h3>어려운 계산기</h3>
            <input
                type = "number"
                value = {hardNumber}
                onChange={(e)=>setHardNumber(parseInt(e.target.value))}
            />
            <span> + 10000 = {hardSum}</span>

            {/*
            
            쉬운 계산기는 어려운 계산기와는 다르게 딜레이가 없을 거 같은데 있다
            어려운 계산기와 똑같이 딜레이가 있다 
            우리의 이 USEMEMO 컴포넌트는 함수형 컴포넌트이다 
            우리가 쉬운 계산기의 숫자를 바꿔주면 easyNumber state가 바뀌는 거다
            state가 바뀐다는 말은 우리의 컴포넌트가 다시 랜더링 된다는 거고
            그러면 내부에 있는 hardSum, easySum 두개의 변수 모두다 초기화 됨
            그래서 hardCaluculate 함수도 불려지기 때문에 우리가 
            hardNumber를 바꾸든 easyNumber를 바꾸든 hardCalculate 함수가 다시 호출되고 그 안에 있는 의미없는 루프가 돌아간다 
            너무 비효율적이다 그래서 우리가 easyNumber state를 변경할 때는 hardCalculate 함수가 불리지 않게하는 방법은 없을까?

            그게 바로 useMemo. 
            useMemo를 사용하면 어떤 조건을 만족했을 때만 변수들이 초기화됨
            만약 그 조건을 만족시키지 못했다면 컴포넌트가 랜더링 되어도 초기화시켜주지 않고 이전에 이미 갖고 있던 값을 그대로 사용하게 해줌
            이걸 다른 말로 Memoization이라고 한다 

            */}
            <h3>쉬운 계산기</h3>
            <input
                type = "number"
                value = {easyNumber}
                onChange={(e)=>setEasyNumber(parseInt(e.target.value))}
            />
            <span> + 1 = {easySum}</span>
        </div>
    )
}

export default USEMEMO