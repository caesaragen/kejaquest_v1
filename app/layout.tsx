import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KejaQuest',
  description: 'KejaQuest',
}

const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <Modal
        isOpen
        title='Login'
        />
        <Navbar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
