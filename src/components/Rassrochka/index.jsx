import React from 'react'
import { p1, p2, p3, p4 } from '../../assets'
import './Rassrochka.scss'

const Rassrochka = () => {
    return (
        <div className='rassrochka'>
            <h1>Our offer to you</h1>
            <div className='rassrochka__block'>
                <div className='rassrochka__block__image'>
                    <img src={p1} alt="" />
                </div>
                <div className='rassrochka__block__text'>
                    <h3>1</h3>
                    <p>
                        Do you want to buy a car and have already chosen your model?
                    </p>
                </div>
            </div>
            <div className='rassrochka__block'>
                <div className='rassrochka__block__text'>
                    <h3>2</h3>
                    <p>
                        Have you counted your money and realized what you are missing?
                    </p>
                </div>
                <div className='rassrochka__block__image'>
                    <img src={p2} alt="" />
                </div>
            </div>
            <div className='rassrochka__block'>
                <div className='rassrochka__block__image'>
                    <img src={p3} alt="" />
                </div>
                <div className='rassrochka__block__text'>
                    <h3>3</h3>
                    <p>
                        It's not a problem! We have a solution !
                    </p>
                </div>
            </div>
            <div className='rassrochka__block'>
                <div className='rassrochka__block__text'>
                    <h3>4</h3>
                    <p>
                        You can apply for an interest-free installment plan (from 6 months to 4 years)
                    </p>
                </div>
                <div className='rassrochka__block__image'>
                    <img src={p4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Rassrochka