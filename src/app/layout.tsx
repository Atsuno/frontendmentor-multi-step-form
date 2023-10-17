import '@/styles/globals.css'
import { FC, PropsWithChildren } from 'react'
import fontClass from '@/styles/font'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className={fontClass}>
    <body className="bg-primary-four/40 font-primary">
      {children}
    </body>
  </html>
)

export default RootLayout
