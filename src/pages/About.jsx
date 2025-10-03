import React from 'react'
import photo from "../assets/image.jpg"

const About = () => {
  return (
    <div 
      style={{
        margin: "50px",
        display: "flex",
        alignItems: "center",
        gap: "100px",
        flexDirection: "row-reverse",
        backgroundColor:"blueviolet"
        
      }}
    >
      {/* Right side image with slide-in-right animation */}
      <img 
        src={photo} 
        alt="me" 
        style={{
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          animation: "slideInRight 1s ease-in-out forwards",
         
        }}
      />

      {/* Left side text with slide-in-left animation */}
      <div style={{ animation: "slideInLeft 1s ease-in-out forwards" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold", margin: "0", color:"white"}}>
          OJOK ALFRED
        </h1>
        <h2 style={{ fontSize: "24px", color: "orangered", margin: "10px 0" }}>
          A Creative Developer From Gulu, Uganda
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#0be0c4ff"  }}>
          I build visually stunning and highly functional web applications 
          with a blend of creativity and code.
          <br />
          I specialize in crafting mobile-first, user-centric experiences 
          using cutting-edge technologies.
        </p>
      </div>

      {/* Keyframe styles */}
      <style>
        {`
          @keyframes slideInLeft {
            from {
              transform: translateX(-100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInRight {
            from {
              transform: translateX(100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  )
}

export default About
