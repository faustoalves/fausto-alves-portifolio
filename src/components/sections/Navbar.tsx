import React from 'react'
import LogoFausto from '../common/logo/LogoFausto'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='w-full flex items-center justify-between relative p-4 top-line bottom-line bg-purple-50 dark:bg-purple-900 mx '>
      <LogoFausto className='text-pink-700 dark:text-pink-100 h-8 w-auto' />
      <div className='flex items-center gap-4'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar