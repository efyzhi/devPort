import './Home.css'
import home from '../../assets/images/hommme.jpg'


const Home = () => {
  return (
    <div className='home' id='home'>
      <h1> Hello!  </h1>
      <p> I'm Sunday - Frontend Developer</p>
      <p> I bring ideas to life using code and i enjoy doing so, thereby creating a pleasant user experience.</p>
      <div className='hero'> <img src={home} alt='home' width={500} height={500}/></div>
    </div>
  )
}

export default Home