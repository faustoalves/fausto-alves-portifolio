import React from 'react'

type Props = {
  children: React.ReactNode
}

const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <main className='w-full bg-purple-50 dark:bg-purple-900 min-h-screen'>
        <div className="grid grid-cols-1 md:grid-cols-[12px_1fr_12px] lg:grid-cols-[16px_1fr_16px] xl:grid-cols-[40px_1fr_40px] max-w-[1536px] w-full mx-auto h-full transition-all duration-300">
          <div className="hidden md:block pattern-bg border-line z-10"/>
          <div className="w-full  min-h-screen flex flex-col items-center justify-center relative">
            <div className="absolute top-0 left-0 w-full h-full grid grid-cols-2 xl:grid-cols-4 divide-x divide-purple-200 dark:divide-purple-800 ">
              <div className='hidden xl:block'/>
              <div className='hidden md:block'/>
              <div className='hidden md:block'/>
              <div className='hidden xl:block'/>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-start relative'>
              {children}
            </div>
          </div>
          <div className="hidden md:block pattern-bg border-line z-10"/>
        </div>
    </main>
  )
}

export default MainContainer