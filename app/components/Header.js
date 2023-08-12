import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='header'>
        <div>
            <div className='logo'>
                learn next js
            </div>
            <div className='links'>
                <Link href="about">About</Link>
                <Link href="/about/team">Team</Link>
            </div>
        </div>
    </header>
  )
}
