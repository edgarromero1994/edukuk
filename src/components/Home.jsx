import React from 'react'
import Courses from './Courses'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='container'>
        <div className="hero">
        <section className="hero__container container">
            <h1 className="hero__title">¡Domina la lógica de programación con nuestro curso de JavaScript!</h1>
            <p className="hero__paragraph">Elige dominar JavaScript de una vez por todas. Al completar este curso, podrás desarrollar habilidades sólidas en programación con JavaScript y crear aplicaciones interactivas y dinámicas.</p>
         <Link className="cta" to="/javascript-desde-0" >Empezar Ya!</Link>
        </section>
        </div>
        <Courses/>
    </div>
  )
}

export default Home