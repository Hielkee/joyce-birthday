import './globals.css'
import { DynaPuff } from 'next/font/google'

const dynapuff = DynaPuff({ 
  subsets: ['latin'],
  variable: '--font-dynapuff',
  display: 'swap',
})

export const metadata = {
  title: 'Happy Birthday Joyce!',
  description: ':)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dynapuff.variable} font-sans`}>{children}</body>
    </html>
  )
}
