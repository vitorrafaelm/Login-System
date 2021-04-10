import React, { useEffect, useState } from 'react';

import './style.css';

interface Props{
    valor: boolean; 
    children: React.ReactNode
}

const ToastMessage = ({valor, children}: Props) => {
    const [time, setTime] = useState(false); 
    
    useEffect(() => {
        setTime(valor)
    }, [valor])

    setTimeout(() => {
        setTime(true); 
    }, 5000)
    
    return (
        <div className={time ? 'containerDissapear' : 'container'}>
            {children}
        </div>
    )
}

export default ToastMessage; 