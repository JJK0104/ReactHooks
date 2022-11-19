import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from '../context/UserContext';

const ContextHeader = () => {
  // 이제 Context로 전달한 정보를 받아 오려면 useContext 훅을 사용하면 된다
  // object 구조분해할당
  const { isDark } = useContext(ThemeContext); // 인자로는 우리가 만든 Context를 넣어주면 된다
                                               // useContext 훅을 사용해서 ThemeContext 불러오기
  console.log(isDark);

  const user = useContext(UserContext)
  console.log('Header',user)
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome {user}</h1>
    </header>
  );
};

export default ContextHeader;
