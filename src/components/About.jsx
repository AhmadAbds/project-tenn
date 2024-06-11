import './About.css'
import child from './../assets/img/child.jpg'
function About({menu_range}) {
  return (
    <div className='About'>
      <div className='profile_About'>
          <img src= {child} alt="" className='Cardimg_About' />
        </div> 
        <div className='AboutText'>
            <h1>About Me</h1>
            <div className='lorem'>I'm a computer and automation engineer, I work As a dedicated and disciplined front-end developer with expertise in HTML, CSS, JavaScript, React, and Tailwind. I have a strong work ethic and enjoy taking on challenging tasks in my field.</div>
            <div>
              <h2>My Skills :</h2>
            {menu_range.map((element,index)=>{return(
                <div key={index}>
                    <div className='textrange'>{element.title}</div>
                    <input type="range" value={element.value}/>
                    </div>
                    )})}  
       </div>
        </div>
    </div>
  )
}

export default About