import './navBar.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io5";




const NavBar = () => {
  return (
    <div className="menu">     
      <h1 className='logo'>Sunday Robert</h1>
      <ul className='socials'>
        <li><a><FaFacebookF />
</a></li>
        <li><a><IoLogoGithub />
</a></li>
        <li><a><LuInstagram />
</a></li>
        <li><a><FaXTwitter />
</a></li>
      </ul>
    </div>
  )
}

export default NavBar
