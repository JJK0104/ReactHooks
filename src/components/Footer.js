import React from "react";

// Footer 컴포넌트는 2개의 props를 전달받음
const Footer = ({ isDark, setIsDark }) => {
    // isDark 상태 바꿔주는 함수 
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={toggleTheme}>
        {/* button이 클릭될때마다 toggleTheme 함수가 실행됨 */}
        Dark Mode
      </button>
    </footer>
  );
};

export default Footer;
