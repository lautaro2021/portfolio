import React, {useState} from 'react'
import s from './Styles/NavBar.module.css'

function NavBar() {
    const [nav, setNav] = useState(false);

    const changeBg = () =>{
        if(window.scrollY >= 200){
            setNav(true);
        }else{
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBg)
  return (
    <div className = {nav ? s.containerActive : s.container}>
    <ul>
        <li className = {s.logo}>
            <a>LA</a>
        </li>
        <div className = {s.navDiv}>
            <li>
                <a>Skills</a>
            </li>
            <li>
                <a>Projects</a>
            </li>
            <li>
                <a>Contact</a>
            </li>
            <li>
                <a>LinkedIn</a>
            </li>
            <li>
                <a>GitHub</a>
            </li>
        </div>
    </ul>
    </div>
  )
}

export default NavBar