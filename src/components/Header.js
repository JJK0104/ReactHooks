import React from "react";

// Header는 isDark를 props로 전달 받음
const Header = ({ isDark }) => {
  return (
    <header
      className="header"
      style={{
        // isDark 상태에 따라 배경색과 글자색이 왔다갔다 함
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome 홍길동!</h1>
    </header>
  );
};

export default Header;
