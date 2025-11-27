import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c1038] to-[#f3b5d4] text-[#111111]">
      <Navbar />
      <main className="mx-auto max-w-[1600px] px-3 pb-16 pt-6 sm:px-4 lg:px-6">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
