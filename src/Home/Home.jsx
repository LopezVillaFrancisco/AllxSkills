import { Link } from 'react-router-dom'
import Hero from './Hero/Hero'
import Staff from './Staff/Staff'
import Workshop from './Workshop/Workshop'
import Form from './Form/Form'
import './Home.css'
import SoftSkills from './SoftSkills/SoftSkills'
import Newsletter from './Upgrade/Newsletter'

function Home() {
  return (
    <section className='homeBody'>
      <Hero/>
      <Staff/> 
      <h2 className='workshopH2'>Elige tu siguiente curso</h2>
      <Workshop/>
      <Link>
        <button className='moreCourses'>Más cursos</button>
      </Link>
      <Newsletter/>
      <SoftSkills/>
      <Form/>  
    </section>
  );
}

export default Home