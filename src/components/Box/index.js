import React from 'react';

const Box = ({text, title, btn, bg, color}) => {
    return (
        <div className='container'>
           <div style={{background:color}} className="box">
               <h3 style={{
               }}>{text}</h3>
               <img width="60px" src={title} alt="img"/>
               <button style={{
                   background:bg
               }
               }>{btn}</button>
           </div>
        </div>
    );
};

export default Box;