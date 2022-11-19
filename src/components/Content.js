import React from "react";

// Content는 isDark를 props로 전달 받음
const Content = ({ isDark }) => {
  return (
    <div
      className="content"
      style={{
        // isDark 상태에 따라 배경색과 글자색이 왔다갔다 함
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>홍길동님, 좋은 하루 되세요</p>
    </div>
  );
};

export default Content;
