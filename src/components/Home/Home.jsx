import React from 'react'
import Header from './Header/Header'
import './Home.css'
import hero_img from '/src/assets/image1.png'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <div className="intro">
            <div className="left-h">
                <div>
                  <h2>Stay healty with</h2>
                  <h2><span>Yoga </span>even if you stay</h2>
                  <h2>at home</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit repudiandae minima distinctio tenetur nesciunt quidem repellat odio voluptatem incidunt adipisci eligendi, eum nostrum illum dolor! Repellat beatae ipsam tenetur!</p>
                <button className='btn'>Read more</button>
            </div>
            <div className="right-h">
              <img src={hero_img} alt="" />
              <div className='inf'>
                <h4>Yoga & Strech</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div className="email">
                  <i class="fa-solid fa-envelope"></i>
                  <h5>yoga@gmail.com</h5>
              </div>
              <div className="phn">
                  <i class="fa-solid fa-phone-volume"></i>
                  <h5>+91 12451-12451</h5>
              </div>
              <div className="desc">
                  <h4>Running</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus laboriosam, aspernatur ad quidem id officiis nobis labore hic nam porro molestias dicta incidunt.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home
