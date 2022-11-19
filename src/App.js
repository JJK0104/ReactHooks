import { useState } from "react";
import "./App.css";
import Page from "./components/Page";

// 최상위 컴포넌트 App 컴포넌트
// App - Page - Header
//            - Content
//            - Footer
function App() {
  // 현재 화면의 다크모드 여부를 true, false로 갖고 있는 state
  const [isDark, setIsDark] = useState(false);

  // App 컴포넌트가 갖고 있는 isDark라는 정보는 우리 앱의 전체적인 테마에 관련된 정보를 담고 있기 때문에 전역적이라고 할 수 있다
  // 그말은 우리 앱이 굉장히 컸다면 수많은 컴포넌트들이 이 isDark라는 data를 필요로 할거라는 얘기
  // isDark의 data flow를 보면 App 컴포넌트가 Page 컴포넌트한테 isDark를 그대로 props로 넘겨주고 있다
  // Page 컴포넌트를 보면 isDark를 받아오고 있긴 한데 Page 컴포넌트는 isDark를 사용하지 않고 있다
  // 단지 자식 컴포넌트들에게 그대로 전달해주는 역할을 하고 있다.
  // 그래서 Page 컴포넌트는 isDark를 필요로 하지 않는 중간 컴포넌트다.

  // 최상위 컴포넌트 App 컴포넌트는 Page라는 자년 컴포넌트 가지고 있음
  // App 컴포넌트는 Page 자녀 컴포넌트에 isDark와 setIsDark를 props로 넘겨줌
  return <Page isDark={isDark} setIsDark={setIsDark} />;
}

export default App;
