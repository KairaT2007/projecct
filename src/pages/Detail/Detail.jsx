import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import './Detail.scss'

const Detail = () => {
  const [car, setCar] = useState();
  const { id } = useParams();
  const [loading, setLoading] = useState(true)

  const getCar = () => {
    axios(`https://63f61ce19daf59d1ad822284.mockapi.io/moserati/${id}`)
      .then(res => {
        setCar(res.data)
        setLoading(false)
      })
  }

  useEffect(() => {
    getCar()
    // eslint-disable-next-line
  }, [])
  
  if (loading === true) {
    return (
      <div className='loading'>
        <img src='https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-14.gif' alt=''/>
      </div>
    )
  } else {
    return (
      <div className='GR'>
        <h1>{car?.name}</h1>
        <div className='GR__image'>
          <div className='GR__image__info'>
            <div className='GR__image__info__card'>
              <div>
                <span>Max power:</span>
                <span>{car?.MaxPower}</span>
              </div>
              <div>
                <span>Max speed:</span>
                <span>{car?.MaxSpeed}</span>
              </div>
              <div>
                <span>Max torque:</span>
                <span>{car?.MaxTorque}</span>
              </div>
              <div>
                <span>Acceleration:</span>
                <span>{car?.Acceleration}</span>
              </div>
              <div>
                <span>Traction:</span>
                <span>{car?.Tracton}</span>
              </div>
            </div>
            <button data-text="NOW!">
              <span>Buy</span>
            </button>
          </div>
          <img src={car?.img} alt="" />
        </div>
        <div className='GR__text'>
          <h3>Description</h3>
          <p>{car?.desc}</p>
        </div>
      </div>
    )
  }
}

export default Detail