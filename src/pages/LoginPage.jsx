import React from 'react'
import Form from '../components/Form';
import "../styles/loginPage.css";
import Anne from "../assets/images/Anne.jpg"
import { AiOutlineStar } from "react-icons/ai"
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai"

const LoginPage = () => {
  const star = [
    { id: 1, icon: <AiOutlineStar /> },
    { id: 2, icon: <AiOutlineStar /> },
    { id: 3, icon: <AiOutlineStar /> },
    { id: 4, icon: <AiOutlineStar /> },
  ]
  return (
    <div className='main__container'>
      <div className="card__container">
        <div className="left__div"><Form /></div>
        <div className="right__div">
          <img src={Anne} alt='Anne Marie' />
          <div className="inner__img__div">
            <div className="header__div">
              <h5>"We've been using all the latest knowledge
                and applications to improve our skills every day "</h5>
            </div>
            <div className="mid__div">
              <div className="mid__left__text">
                <h3>Gloria Johnson</h3>
              </div>
              <div className="mid__right__text">
                {
                 star.map((st)=>(
                  <span key={st.id} className="star__icon">
                    {st.icon}
                  </span>
                 ))

                }


              </div>
            </div>
            <div className="footer__div">
              <div className="left__footer__text">
                <h5>Founder CEO</h5>
                <h5>Web Design Agency</h5>
              </div>
              <div className="right__footer__text">
                <div className="circle__button">
                <AiOutlineArrowLeft className='button__arrow'/>
                </div>
                <div className="circle__button">
                <AiOutlineArrowRight className='button__arrow'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage