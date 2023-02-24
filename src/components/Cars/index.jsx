import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Cars.scss"

const Cars = () => {

  const [moserati, setMoserati] = useState()
  const [active, setActive] = useState(false)
  const [first, setfirst] = useState(0)
  const [loading, setLoading] = useState(true)

  const getApi = async () => {
    try {
      const res = await axios.get('https://63f61ce19daf59d1ad822284.mockapi.io/moserati');
      const data = res.data;
      setMoserati(data);
      setLoading(false)
    } catch (_err) {
      console.info(_err)
    }

  }

  useEffect(() => {
    getApi()
  }, [])

  if (loading === true) {
    return (
      <div className='loading'>
        <img src='https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-14.gif' alt=''/>
      </div>
    )
  } else {
    return (
      <div className='cars'>
        {
          moserati?.map(item => {
            return (
              <>
                <h3>{item.title}</h3>
                <div className='car'>
                  <div className='car__text'>
                    <h2>{item.name}</h2>
                    <p>
                      {item.desc2}
                    </p>
                    <div className='buttons'>
                      <Link to={`/${item.id}`}>
                        <button data-text="Learn More">
                          <span>{item.name}</span>
                        </button>
                      </Link>
                      <button onClick={() => { setActive(true); setfirst(item.id) }} data-text="Click">
                        <span>Click to ride</span>
                      </button>
                    </div>
                  </div>
                  <div className='sep'>
                    <img src="https://t3.ftcdn.net/jpg/01/39/79/34/360_F_139793420_zoY96Z1rJmP3UfkXUPpxtmytaCBEFk14.jpg" alt="" />
                  </div>
                  <div className={active && item.id === first ? 'car__animation active' : 'car__animation'}>
                    <video src={item.video} autoPlay muted></video>
                  </div>
                </div>
              </>
            )
          }
          )
        }
      </div>
    )
  }
}
export default Cars