import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'next learning',
  description: 'learning next js ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header></Header>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
