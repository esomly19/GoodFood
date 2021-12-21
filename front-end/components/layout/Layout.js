// components/layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div id={"global-container"}>
        <Navbar />
        <main id={"content-wrap"}>{children}</main>
        <Footer />
    </div>
  )
}