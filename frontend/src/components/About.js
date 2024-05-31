// import React, { useContext, useEffect } from 'react'
import React from 'react'

const About = (props) => {
  return (
    <div className="container">
      <h1 className="my-3" style={{color:props.mode === 'dark'?'white': '#042743'}}>About My Assignment</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Integrated Sign Up Page</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            I have integrated a secure login and sign up page using JWT tokens.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            You can look at amaizng posts once you login
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.
            </div>
          </div>
        </div>
    </div>
    <div style={{minHeight: '100vh', position: 'absolute', paddingTop: '60px', paddingBottom: '60px' }}>
        <footer style={{ textAlign: 'center', position:'fixed', bottom: '0', left: '0', right: '0', width: '100%', padding: '10px', color: '#00475d', backgroundColor: 'rgba(64, 154, 181, 0.5)'}}>
          Made with ❤️️ by Syed Omar Albeez
        </footer>
      </div>
    </div>
  )
}

export default About
