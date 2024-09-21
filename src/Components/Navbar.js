import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
            <div>
                <nav>  
                    <ul className="sidebar">
                        <li onClick={hideSidebar()}><Link to="../Pages/HomePage"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></Link></li>
                        <li><Link to='../Pages/Bddies'>Buddies</Link></li>
                        <li><Link to='../Pages/Search'>Search</Link></li>
                        <li><Link to='../Pages/Coaches'>Coaches</Link></li>
                        <li><Link to='../Pages/Community'>Community</Link></li>
                        <li><Link to='../Pages/About'>About</Link></li>
                        <li><Link to='../Pages/Login'> Login</Link></li>
                    </ul>
                    <ul>
                        <li><Link href='../Pages/HomePage'>Buddy</Link></li>
                        <li class="hideOnMobile"><Link to='../Pages/Search'>Search</Link></li>
                        <li class="hideOnMobile"><Link to='../Pages/Bddies'>Buddies</Link></li>
                        <li class="hideOnMobile"><Link to='../Pages/Coaches'>Coaches</Link></li>
                        <li class="hideOnMobile"><Link to='../Pages/Community'>Community</Link></li>
                        <li class="hideOnMobile"><Link to='../Pages/About'>About</Link></li>
                        <li class="hideOnMobile"><Link to='../Pages/Login'>Login</Link></li>
                        <li class="menu-button" onClick={showSidebar()}><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></Link></li>
                    </ul>
                
                </nav>
                
            </div>
         )
} 

/*

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath, end: true })
    return (
        <li className={isActive? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}*/
    

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }

  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

export default Navbar;


