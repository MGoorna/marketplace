import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from "react-router-dom";
import reactLogo from './../assets/react.svg'
import './Navbar.scss'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation()

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => window.removeEventListener('scroll', isActive);
  }, [])

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true
  }

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className='container'>
        <div className='navlinks'>
          <div className='logo'>
            <span className='text'>Fiverr</span>
            <span className='dot'>.</span>
          </div>
          <nav className="links">
            <ul>
              <li><NavLink to="ss">Fiverr Business</NavLink></li>
              <li><NavLink to="dd">Explore</NavLink></li>
              <li><NavLink to="ee">English</NavLink></li>
              <li><NavLink to="gg">Become a Seller</NavLink></li>
              {currentUser && <li><NavLink to='signin'>Sign in</NavLink></li>}
              {!currentUser && <li><button className='btn'>Join</button></li>}
              {currentUser &&
                <div className='user'>
                  <img className='img' src={reactLogo} alt={currentUser.username} onClick={() => setOpen(!open)} />
                  <span>{currentUser?.username}</span>
                  {open && <div className='options'>
                    {currentUser?.isSeller && (
                      <>
                        <Link to='/mygigs' className='link'>Gigs</Link>
                        <Link to='/add' className='link'>Add new Gig</Link>
                      </>
                    )}
                    <Link to='/order' className='link'>Orders</Link>
                    <Link to='/messages' className='link'>Messages</Link>
                    <Link to='/logout' className='link'>Logout</Link>
                  </div>}
                </div>
              }
            </ul>
          </nav>
        </div>
        {(active || pathname !== '/') && (<>
          <div className="hr"></div>
          <div className="menu">
            <Link className='link' to="/">Graphics & Design</Link>
            <Link className='link' to="/">Digital Marketing</Link>
            <Link className='link' to="/">Writing & Translation</Link>
            <Link className='link' to="/">Video & Animation</Link>
            <Link className='link' to="/">Music & Audio</Link>
            <Link className='link' to="/">Programming & Tech</Link>
            <Link className='link' to="/">Business</Link>
            <Link className='link' to="/">Lifestyle</Link>
            <Link className='link' to="/">AI Services</Link>
          </div>
        </>)
        }
      </div>

    </div>
  )
}

export default Navbar