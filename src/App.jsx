import './App.css'
import { ThemeContext } from './components/Context/theme'
import { useContext } from 'react'
import NavBarr from './components/NavBarr'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Together from './components/Together'
import Footer from './components/Footer'
const App = () => {
const [{theme , isDark},toggleTheme] = useContext(ThemeContext)
console.log("theme",theme)
  return (
     <div style={{background : theme.background , color : theme.color}}>
      <NavBarr menuside={[{titleside : "Home" }, {titleside : "About Me" },{titleside : "Services" },{titleside : "projects"} ,{titleside : "Testimonials"} ,{titleside : "Contact"}]} menu={[{title : "Home" }, {title : "About Me" },{title : "Services" },{title : "projects"} ,{title : "Testimonials"} ,{title : "Contact"}]} btn="Download CV" logo="AH" />
      <Hero title="Hi I am " name ="Ahmad Alhamwi " jop="Front End" jopp="Developer" subtitle="Hi, my name is Ahmad i'm a freelance Front-end Developer from Syria, I have over 8 month experience in leading teams and digital products." btnn="Hire Me" />
      <About menu_range={[{title : "Html" , value : 99}, {title : "Css", value : 90},{title : "Java-Script " , value : 97}, {title : "React js & Tailwind ", value : 94}]}/>
      <Projects/> 
      <Together/>
      <Footer/>
       </div> 
  )
}
export default App;


