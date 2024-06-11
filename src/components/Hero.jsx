import './Hero.css'
import A11 from './../assets/img/A11.jpg'
function Hero({ title , name , jop , jopp , subtitle , btnn}) {
  return (
    <div className='Hero'>
        <div className='Text'>
        <h3>{title}</h3>
        <h2>{name}</h2>
        <h1>{jop}</h1>
        <h1 className='jopp'>{jopp}</h1>
        <div>{subtitle}</div>
        <button>{btnn}</button>
        </div>
        <div className='profile'>
          <img src={A11} alt="" className='Cardimg' />
        </div> 
    </div>
  )
}

export default Hero