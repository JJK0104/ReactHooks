import { useState } from "react";
import "./App.css";
import ContextPage from "./components/ContextPage";
import { ThemeContext } from "./context/ThemeContext"; // Step2) 우리가 만든 Context import 해오기
import { UserContext } from "./context/UserContext";

// 최상위 컴포넌트 ContextApp 컴포넌트
// ContextApp - ContextPage - ContextHeader
//                          - ContextContent
//                          - ContextFooter
function ContextApp() {
  // 기존 App 컴포넌트가 갖고 있는 isDark라는 정보는 우리 앱의 전체적인 테마에 관련된 정보를 담고 있기 때문에 전역적이라고 할 수 있다
  // 그말은 우리 앱이 굉장히 컸다면 수많은 컴포넌트들이 이 isDark라는 data를 필요로 할거라는 얘기
  // isDark의 data flow를 보면 App 컴포넌트가 Page 컴포넌트한테 isDark를 그대로 props로 넘겨주고 있다
  // Page 컴포넌트를 보면 isDark를 받아오고 있긴 한데 Page 컴포넌트는 isDark를 사용하지 않고 있다
  // 단지 자식 컴포넌트들에게 그대로 전달해주는 역할 하고 있다.
  // 그래서 Page 컴포넌트는 isDark를 필요로 하지 않는 중간 컴포넌트다.

  // 그래서 context를 사용해서 isDark라는 data를 모든 하위 컴포넌트들에게 props를 사용하지 않고 공유해보자
  // 그러면 Page 컴포넌트는 isDark에 대해 전혀 몰라도 된다

  // Step1) 먼저 context를 만들어줄 폴더를 만들자 context - Themecontext.js

  const [isDark, setIsDark] = useState(false);

  return (
    // Step3) ContextPage 컴포넌트를 우리가 만든 Context(ThemeContext)의 Provider로 감싸준다
    // Context의 Provider는 value라는 prop을 받고 이 value 안에는 우리가 전달하고자 하는 data를 집어 넣어주면 된다
    // 지금같은 경우는 isDark와 setIsDark를 모든 하위 컴포넌트에 전달해야되니까 object를 하나 만들어주고
    // 안에 isDark, setIsDark를 넣어준다
    // 이러면 ThemeContext.Provider가 감싸는 모든 하위 컴포넌트는 우리가 value로 집어 넣어준
    // isDark와 setIsDark에 접근할 수 있게 된다. 물론 props를 사용하지 않고

    // 다시한번 설명하면 ContextApp 컴포넌트에서 Context를 불러와서
    // 모든 하위 컴포넌트들에게 "나 필요한 사람" 이라고 방송해준거다
    // Page 컴포넌트는 그 정보가 전혀 필요하지 않으니까 그 정보를 받아오지 않았고
    // 그 하위 컴포넌트인 Header 컴포넌트는 useContext를 사용해서 " 저 그거 필요해요 "라고 반응해준 거다
    // 똑같이 Content 컴포넌트, Footer 컴포넌트도 useContext 사용해서 isDark, setIsDark 받아올 수 있었다
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <UserContext.Provider value={"O O O 님"}>
        <ContextPage />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ContextApp;
