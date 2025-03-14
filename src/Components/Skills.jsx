import html from '../assets/photos/icons8-html-logo (1).svg'
import css from '../assets/photos/icons8-css-logo (1).svg'
import Js from '../assets/photos/icons8-javascript (2).svg'
import React from '../assets/photos/react.svg'
import ReactVite from '../assets/photos/icons8-vite (1).svg'
import OpenAI from '../assets/photos/icons8-chatgpt (1).svg'

function Skills() {
  return (
    <>
          <div className="head">
            <h1>SKILLS</h1>

          </div>
       <div className="skills">
        <div className="skill">
            <div className="img1">

            <img src={html} alt="Html5"/>
            <h1>HTML5</h1>
            </div>
        </div>
        <div className="skill">
            <div className="img2">
            <img src={css} alt="css"  />

            </div>
            <h1>CSS3</h1>
        </div>
        <div className="skill js">
            <div className="img3">
            <img src={Js} alt="javaScript"  />

            </div>
            <h1>JavaScript</h1>
        </div>
        <div className="react">
        
        <div className="skill">
            <div className="img4">
            <img src={ReactVite} alt="React+Vite"  />

            </div>
            <h1>Vite</h1>
        </div>
       
        <h1>+</h1>
       
        
        <div className="skill">
           <div className="img5">
            <img src={React} alt="React"  />
            </div> 
            <h1>React</h1>
        </div>
        </div>
       
        <div className="skill">
            <div className="img6">

            <img src={OpenAI} alt="OpenAI" />
            <h1>OpenAI</h1>
            </div>
        </div>
        {/* <div className="skill">
            <div className="img6">
            <img src={OpenAI} alt="OpenAI" />
            <h1>LightHouse</h1>
            </div>
        </div> */}
    </div>
    <hr />

    </>
  )
}

export default Skills
