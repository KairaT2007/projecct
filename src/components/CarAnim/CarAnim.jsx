import React from 'react'

const CarAnim = ({ active, setActive, children, id }) => {
    console.log(id)
    return (
        <div className={active ? 'car__animation active' : 'car__animation'} id={id}>

            <video src={children} autoPlay muted></video>
        </div>
    )
}

export default CarAnim