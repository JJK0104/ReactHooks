import { createContext } from "react";
// react context를 만들려면 가장 먼저 createContext를 import 해와야된다

export const ThemeContext = createContext(null);
// 기본값으로 null 설정
// 초기값을 'hello'로 바꾸고 
// ContextApp.js에서 ThemeContext.Provider를 주석처리하고
// ContextPage.js로 가서 
// const data = useContext(ThemeContext);
// console.log(data) 입력하면 'hello' 출력된다 

// 만약 useContext로 ThemeContext에 대한 정보를 받아 왔는데 
// 상위에서 해당 Context에 Provider로 감싸주지 않았다면, 즉 value가 없으면 
// 그럴때는 우리가 ThemeContext에서 인자로 넘겨준 초기값을 받아오게 된다 

// 여기까지 하면 우리가 context를 하나 만든 거다 
