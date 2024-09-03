import { useState } from 'react'
import './css/App.css'

function App() {

  return (
    <>
      <section id='section-presentacion'>
        <div id='container-titulo-descripcion'>
          <div id='container-about'>
            <h1 id='h1-aboutme'>ABOUT ME</h1>
            <p id='p-h1'>Hi! I'm <span id='span-nombre'> Juan Rivas </span></p>
            <p id='p-descripcion'>
              I am a 20-year-old developer with solid knowledge in HTML, CSS, JavaScript, Node.js, Express, and React. 
              My fascination with programming and eagerness to start my professional career drive me to deliver innovative and efficient solutions. 
              I am committed to excellence and ready to add value to challenging projects in the field of web development.
              </p>
          </div>
          <div id='container-img-user'>
            <img src="/user.jpeg" alt="" />
          </div>
        </div>
      </section>
      <section>
        <p>asdhaskjdhasjk</p>
      </section>
    </>
  )
}

export default App
