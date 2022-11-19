import React, { useContext } from "react";
import ContextHeader from "./ContextHeader";
import ContextContent from "./ContextContent";
import ContextFooter from "./ContextFooter";
import { ThemeContext } from "../context/ThemeContext";

const ContextPage = () => {
  // Page 컴포넌트는 isDark, setIsDark를 전혀 알 필요 없는 중간 컴포넌트다 --> Context 안씀
  const data = useContext(ThemeContext); // 뭐가 나오는지 확인용... 동작 실행에는 필요 없는 코드
  console.log("ContextPage의 data", Object.getOwnPropertyDescriptors(data));
  // {isDark: {…}, setIsDark: {…}}
  // isDark: {value: false, writable: true, enumerable: true, configurable: true}
  // setIsDark: {writable: true, enumerable: true, configurable: true, value: ƒ}

  return (
    <div className="page">
      <ContextHeader />
      <ContextContent />
      <ContextFooter />
    </div>
  );
};

export default ContextPage;
