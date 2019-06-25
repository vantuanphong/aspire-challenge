import React from 'react'
import HeaderComp from '../../components/headerComp';

const MainContainer: React.FC<{children?:any}> = ({ children }) => {
    return (
      <>
          <HeaderComp></HeaderComp>
        <div className="container">{children}</div>
      </>
    )
    }
    export default MainContainer