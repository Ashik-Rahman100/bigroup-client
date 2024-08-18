import { Inter } from 'next/font/google';
import 'rc-drawer/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import './globals.css';
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'BI GROUP ',
  description: 'Automate your sales and use Business Intelligence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
