// components/layout.js

import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

export default function Layout({ children }) {
  return (
    <>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </>
  )
}