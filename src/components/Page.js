import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

// Page 컴포넌트는 isDark와 setIsDark를 props로 받아오고
// isDark를 모든 자식 컴포넌트에 props로 전달해주고 
// setIsDark는 Footer에만 전달 
const Page = ({isDark, setIsDark})=>{

    return(
        <div className='page'>
            {/* Page 컴포넌트는 3개의 자식 컴포넌트를 가지고 있다 */}
            <Header isDark={isDark} />
            <Content isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark} />
        </div>
    )
}

export default Page