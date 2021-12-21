// components/layout.js

import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

export default function Layout({ children }) {
  return (
    <div id={"global-container"}>
        <Navbar />
        <main id={"content-wrap"}>{children}</main>
        <Footer />
    </div>
  )
}