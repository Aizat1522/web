import React, {useState} from 'react';

const Window = () => {
    const [count, setCount] = useState('none')
    return (

        <div className='container'>
            <div style={{
                display: count ? true : 'none',
                width: '200px',
                height: '200px',
                background: "yellow",
                margin:'10px 0 50px 0',
                borderRadius: '15px'
            }}>
                <div style={{margin:'15px'}}>
                    <h4>MOTION WEB</h4>
                    <p>Lorem ipsum dolor sit.</p>
                    <button style={{margin:'55px',padding:'10px 10px',borderRadius:'10px',border:'none',background:'darkgreen',color:'snow'}}
                   onClick={()=>{
                       setCount(count===true ? false : true)
                   }} >close</button>
                </div>
            </div>
            <button style={{padding:'10px 20px', borderRadius:'10px', fontSize:'16px', border: 'none', background:'black', color: 'white'
            }} onClick={() =>{
                setCount(count ? false :true)
            }}>click</button>
        </div>
    );
};

export default Window;