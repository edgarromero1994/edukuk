import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Javascript.css"

const Courses = () => {
  return (
    <div className="container-card-presentation">
    <h1 className='presentation-title'>Cursos</h1>
    <div className="container-cards-presentation">
        <div className="card-presentation">
            <img src="https://i.ytimg.com/vi/z95mZVUcJ-E/maxresdefault.jpg" alt="" />
                <div className="description-card-presentation">
                    <h2>Curso de Javascrpt desde 0</h2>
                    <p>"En este curso gratuito, desarrollarás tu habilidad lógica en JavaScript y darás tus primeros pasos en la creación de aplicaciones web. Desde fundamentos hasta proyectos prácticos, te sumergirás en el mundo de la programación web sin costo alguno. ¡Prepárate para desbloquear tu potencial en el desarrollo web!"</p>
                    <span className='label-free'>Free</span>
                </div>
                <Link to="/javascript-desde-0" className="button-presentation">Empezar el curso</Link>
        </div>

        <div className="card-presentation">
            <img src="https://escuela.it/storage/course_images/pq5SNrcyZN2BZc3hEPuR0Ieoj4vH9KyQ0ZYEkWuE.jpeg" alt="" />
                <div className="description-card-presentation">
                    <h2>Curso de Javascrpt Avanzado</h2>
                    <p>"En este curso premium, aprenderás a crear aplicaciones web avanzadas utilizando JavaScript. Nos enfocaremos en temas como la creación de páginas web dinámicas, la implementación de carritos de compras, el consumo de APIs, y el uso de funciones asíncronas. Lleva tus habilidades al siguiente nivel y domina JavaScript para desarrollar proyectos más complejos y profesionales."</p>
                    <span className='label-premiun'>Premium*</span>
                </div>
                <Link to="/javascript-advanced" className="button-presentation">Empezar el curso</Link>
        </div>

        <div className="card-presentation">
            <img src="https://i.ytimg.com/vi/rLoWMU4L_qE/maxresdefault.jpg" alt="" />
                <div className="description-card-presentation">
                    <h2>Curso de  Reactjs</h2>
                    <p>"En este curso premium, aprenderás a utilizar ReactJS para desarrollar interfaces de usuario modernas y dinámicas. Cubriremos desde los conceptos básicos hasta la creación de aplicaciones web interactivas y escalables. A través de proyectos prácticos, te familiarizarás con componentes, estados, props, y la integración de APIs. ¡Desbloquea todo el potencial de ReactJS y lleva tus habilidades de desarrollo web a nuevas alturas"</p>
                    <span className='label-premiun'>Premium*</span>
                </div>
                <Link to="/reactj" className="button-presentation">Empezar el curso</Link>
        </div>
    </div>


    </div>
  )
}

export default Courses