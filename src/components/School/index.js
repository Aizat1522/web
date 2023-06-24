import React from 'react';


const School = ({title, btn, it, bg, color, padding, border, br}) => {
    return (
        <div className='container'>
           <div style={{background:bg}} className="school">
               <h3>{title}</h3>
               <p>{it}</p>
               <button style={{color:color,background:bg, padding:padding, border:border, borderRadius:br}}>{btn}</button>
           </div>
        </div>
    );
};

export default School;