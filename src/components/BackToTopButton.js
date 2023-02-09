import React from 'react';
import { useEffect, useState } from 'react';

 function BackToTopButton() {
        const [BackToTopButton, setBackToTopButton ] = useState(false);

        useEffect(() => {
            window.addEventListener("scroll", () => {
                if(window.scrollY > 200) {
                    setBackToTopButton(true);
                } else {
                    setBackToTopButton(false);
                }
            })
        }, []);

        const scrollUp = () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
  return (
    <div className='App'>{BackToTopButton && (
      <button style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        height: "50px",
        width: "50px",
        // fontSize: "30px",
        borderRadius:"50px",
        backgroundColor: "yellow",
        color: "black",
        // fontWeight: "bold",
      }} 
      onClick={scrollUp}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
</svg>
</button>
    )}</div>
  )
}

export default BackToTopButton;