import './NavBarr.css'
import { ThemeContext } from './Context/theme'
import { useContext } from 'react'
import sun from './../assets/icons/sun.svg'
import moon from './../assets/icons/moon.svg'
import { useState } from 'react'
import N1 from './../assets/img/N1.jpg'
const NavBarr = ({menu , logo, btn , menuside }) => {
const [{theme , isDark},toggleTheme] = useContext(ThemeContext)
console.log("theme",theme)
const [show, setShow] = useState(false)
const [arrow, setarrow] = useState(false)
  return (
    <nav style={{background : theme.background , color : theme.color}}>
    <div className='containerlogo' id='containerlogo'>
    <img src={isDark? `${sun}` : `${moon}` } onClick={toggleTheme} alt="" id='Mode' />
    <h1 className='logo' id='logo'>{logo}</h1><h1 className='logotext' id='logotext'><span style={{fontWeight:700}}>A</span>hamwi</h1></div>
       <div className='list'>
       <ul className='ul1'>
            {menu.map((element,index)=>{return(
                <li key={index}>{element.title}</li>
            )})}
        </ul>
        <button id='button' >{btn}</button>
        <button class="icon" onClick={()=>setShow(true)}><i class="fa-solid fa-bars"></i></button>
        </div>

{/*=================================================================  sidebar   =================================================================*/}

{show?<div className='sidebar'>
<div style={{height:"40px" , width:"100%" , background:"seagreen",color:" rgba(255, 255, 255, 1)"}}>
  <div className='sidebarlogo'><img src={isDark? `${sun}` : `${moon}` } onClick={toggleTheme} alt="" />
  <div onClick={()=>setShow(false)}><i class="fa-solid fa-xmark fa-2xl"></i></div></div></div>

<div className='containerlogo'>
    <h1 className='logo'>{logo}</h1><h1 className='logotext' style={{color:"black"}}><span style={{fontWeight:700}}>A</span>hamwi</h1></div>
    <div style={{display:"flex", gap:"10px" , alignItems:"center" , width:"100%" , borderBottom:"1px solid gray" , padding:"10px"}} >

    <div className='profile'>
        <div className='Cardimg' style={{background : `url(${N1})` ,backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
          <img src={N1} alt="" className='Cardimg'/>
        </div>
        </div> 
            <div>
              <div className='Muhammad' >Ahmad Alhamwi</div>
              <h5 style={{fontWeight:"600", color:"rgba(84, 84, 84, 1)" , fontFamily:"Inter"}}>Front End Developer</h5>
            </div>
          </div>

          <div style={{padding:"15px 0 15px 20px"}}>
          <div id='Together' onClick={()=>setarrow(!arrow)} ><div>Lets Design Together</div><i  id="arrow-1" class="fas fa-chevron-down arrow"></i></div>
          <div className='inputsidebar' style={{display: (arrow)? "block":"none"}}><input type="text" placeholder='Enter Your Email'/><button style={{height:"30px",width:"55px" , fontSize:"8px"}}>contact me</button></div>
          </div>
        <ul className='ul2'>
            {menuside.map((element,index)=>{return(
                <li key={index}>{element.titleside}</li>
            )})}
        </ul>
        </div>:null}

    </nav>
  )
}

export default NavBarr