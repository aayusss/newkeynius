import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

const Redirect = () => {
    const [count, setCount]=useState(1);
    const history=useHistory();

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((counter)=>--counter)
    },1000)
    count===0 && history.push('/Login')
    return ()=> clearInterval(interval);
},[count,history])
    
    return (
        <div>
            redirect to the login page in {count} sec
        </div>
    )
}

export default Redirect;
