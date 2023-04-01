
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';


const RootLayout = () => {
  return (
    <div className="layout">
      <header className="sticky">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout