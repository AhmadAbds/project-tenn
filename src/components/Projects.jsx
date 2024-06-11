import './Projects.css'
import w1 from './../assets/img/w1.png'
import w2 from './../assets/img/w2.png'
import w3 from './../assets/img/w3.png'
import w4 from './../assets/img/w4.png'
import w5 from './../assets/img/w5.png'
import w6 from './../assets/img/w6.png'
function Projects() {
  return (
    <div className='Projects'>
        <h1>My Projects</h1>
        <h2>Here are some simple projects.</h2>
        <div className="containerprojects">
          <div className="project">
            <a href="https://ahmadabds.github.io/furni/">
            <div className="cardimgproject1">
            <img src={w1} alt="" className='imgwp1' />
            <img src={w2} alt="" className='imgwp2'/>
          </div>
          </a>
          <div className='Web_Design'>RentUp</div>
          <div className='text_Design'>his site displays the houses for rent, by html,css.</div>
          </div>

          <div className="project"><a href="https://ahmadabds.github.io/pro-f/">
            <div className="cardimgproject1">
            <img src={w3} alt="" className='imgwp1' />
            <img src={w4} alt="" className='imgwp2'/>
          </div>
          </a>
          <div className='Web_Design'>Furniture</div>
          <div className='text_Design'>This site displays the furniture for sale, by html,css.</div></div>
          <div className="project">
            <a href="https://ahmadabds.github.io/food/"><div className="cardimgproject1">
            <img src={w5} alt="" className='imgwp1' />
            <img src={w6} alt="" className='imgwp2'/>
          </div></a>
          <div className='Web_Design'>Organick</div>
          <div className='text_Design'>This site displays the healthy foods, by html,css,js.</div></div>
        </div>
    </div>
  )
}

export default Projects