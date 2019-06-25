import React from 'react'
import HeaderComp from '../../components/headerComp';

const MainContainer: React.FC<{children?:any,clasname?:any}> = ({ children,clasname }) => {
    return (
      <>
          <HeaderComp></HeaderComp>
        <div className={clasname}>{children}</div>
      </>
    )
    }
    export default MainContainer