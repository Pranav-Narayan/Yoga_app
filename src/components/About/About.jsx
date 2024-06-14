import React from 'react'
import './About.css'
import img1 from '/src/assets/yoga_img1.jpg'
import img2 from '/src/assets/yoga_img2.jpg'
import img3 from '/src/assets/yoga_img3.jpg'

const About = () => {
  return (
    <div className="about-us">
        <section>
            <div>
                <div className="left-a">
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className="right-a">
                    <div>
                        <h1>Devise time for</h1>
                        <h1>your body and ming</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptates magni vel ad repellat,</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At explicabo, ipsam doloremque voluptates dolorum id rem vitae in, </p>
                    </div>
                    <button className="btn">Read More</button>
                </div>
            </div>
            <div className='info'>
                <div>
                    <span>3 Steps to make a class Reservation</span>
                </div>
                <div>
                    <div>
                        <i class="fa-solid fa-phone-volume"></i>
                        <span>Call Us</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-chalkboard"></i>
                        <span>Select Class</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-credit-card"></i>
                        <span>Make Payment</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-users-rectangle"></i>
                        <span>Join Class</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
