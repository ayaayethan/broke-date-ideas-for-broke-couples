import { Righteous } from 'next/font/google'
import './globals.css'

const font = Righteous({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Date Ideas for Broke Couples',
  description: 'Need date ideas but you\'re broke? Have no fear, this app is here!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
