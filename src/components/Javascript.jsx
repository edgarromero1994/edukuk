import React from 'react'
import ReactPlayer from 'react-player';
import Courses from './Courses';
import dbJavascriptBasic from "../database/dbJavascriptBasic.json"
const Javascript = () => {
  return (
    <div className='container'>
      <div className="container-javascript">
      <h1>Cursos de javascript desde 0</h1>
      <div className="container-video-javascrip">
        
        {dbJavascriptBasic.map(product => (
                    <div className="card-video-javascript" key={product.id}>
                    <ReactPlayer url={product.vidUrl} controls
                    style={{ width: '300px', maxWidth: '100%' }}
                        />
                        <div className="description-javascrip">
                            <h2 className='title-javascript'>{product.title}</h2>
                        </div>
                    </div>
            
        ))}

       


        </div>  
      </div>
      <Courses/>
    </div>
  )
}

export default Javascript