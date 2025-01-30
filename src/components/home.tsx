import React from 'react';
import heart from '../assets/heart.png';
import star from '../assets/star.png';
import location from '../assets/location.png';
import calendar from '../assets/calendar.png';
import hero_image from '../assets/hero-image.png';
import blackSpecs from '../assets/black-spects.png';
import branding from '../assets/branding.png';
import hero_image_right from '../assets/mobile.png';
import cards from '../assets/cards.png';
import speaker from '../assets/speaker.png';
import spects from '../assets/spects.png';
import bag from '../assets/bag.png';
import paper_torn from '../assets/paper_torn.png';
import footer from '../assets/footer.png';
import coin from '../assets/coins.png';
import camera from '../assets/camera.png';
import hands from '../assets/hands.png';
import box from '../assets/box.png';
import logo from '../assets/logo.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import youtube from '../assets/youtube.png';
import swirl from '../assets/swirl.png';
import rocket from '../assets/rocket.png';
import jacket from '../assets/jacket.png';
import bigstar from '../assets/big-star.png';
import yellowLines from '../assets/yellow-lines.png';

const Home: React.FC = () => {
  return (
    <>
      <div className="body-container">
        <img src={paper_torn} alt="left-paper" className='left-paper' />
        <img src={paper_torn} alt="right-paper" className='right-paper' />
        {/* First Section */}
        <div className="relative isolate overflow-hidden py-24 sm:py-32 bg-blue">
          <div className='flex justify-center items-center'>
            <div className="heading-text">
              <span className="white-text">Where</span><img src={branding} alt="branding" className='branding' /><br /><span className="yellow-text"><img src={blackSpecs} alt="black-spects" />Style</span>
              <span className="white-text small"> meets</span><br /><span className="yellow-text">Opportunity</span>
            </div>
          </div>
          <div className='hero-image'>
            <img src={hero_image} alt="hero image" className='hero' />
            <img src={swirl} alt="white-lines" className='whiteLines' />
            <img src={cards} alt="cards" className='cards' />
            <img src={speaker} alt="speaker"className='speaker' />
            <img src={rocket} alt="cards" className='rocket' />
            <img src={jacket} alt="speaker"className='jacket' />
            <img src={spects} alt="spects" className='spects' />
            <img src={bag} alt="bag" className='bag' />
          </div>
          <div className='hero-image-right'>
            <img src={bigstar} alt="star" className='big-star' />
            <img src={hero_image_right} alt="hero image" className='hero-right' />
          </div>
          <div className='cta'>
            <div>
              <p>Join us in creating</p>
              <p>trendsetting content for</p>
              <p>india's leading e-commerce platform</p>
            </div>
            <a className='cta-button' href='/'>Apply Now!</a>
          </div>
        </div>
        {/* Second Section */}
        <div className="relative isolate overflow-hidden py-24 sm:py-32 bg-yellow">
          <img src={speaker} alt="speaker" className="speaker-second-section" />
          <div className="heading-ys">
            <p className="top-heading"><sup><span className='spiral'></span><img src={star} alt='star' className="supstr" /></sup>What's in <sup><img src={star} alt='star' className="supstr" /></sup>it </p>
            <p className="bottom-heading">for  y<sub><img src={star} alt='star' className='substr' /></sub>ou?<span className='heart'><img src={heart} alt="heart" /></span></p>
          </div>
          <img src={box} alt="box" className="box" />
          <div className="cta-container">
            <div className="column-full">
              <div>
                <img src={coin} alt="coin" /><br />
                <button>Earn Big</button>
                <p>₹4k per day up to</p>
                <p>₹24k monthly</p>
              </div>
            </div>
            <div className="container-full">
              <div className="column-half">
                <div>
                  <img src={camera} alt="camera" /><br />
                  <button>Create Content</button>
                  <p>Be part of exciting</p>
                  <p>fashion content creation!</p>
                </div>
              </div>
              <div className="column-half">
                <div>
                  <img src={hands} alt="hands" className='hands' /><br />
                  <button>Partner with the Best</button>
                  <p>Work with India's biggest</p>
                  <p>e-commerce platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Third Section */}
        <div className="relative isolate overflow-hidden py-24 sm:py-32 bg-pink">
          <div className="pink-section-container">
            <div className="columns-2md">
              <img src={location} alt="location" />
              <div>
                <p>Location</p>
                <p>Bhiwandi</p>
              </div>
            </div>
            <div className="columns-2md">
              <img src={calendar} alt="calendar" />
              <div>
                <p>Start Date</p>
                <p>1st February 2025</p>
              </div>
            </div>
          </div>
          <div className="columns-1md">
            <span>Travel & food included</span>
            <p>Limited spots available! Don't miss this opportunity<img src={yellowLines} alt="yellow-underline" className='yellow-underline' /></p>
          </div>
        </div>
        {/* Footer Section */}
        <div className="relative isolate overflow-hidden py-24 sm:py-32 bg-footer">
          <img src={footer} alt="footer" className="footer-border-image" />
          <div className="footer-container">
            <div className="column3">
              <div className='social-icons'>
                <a href="https://www.linkedin.com" target='_blank'><img src={linkedin} alt="linkedin" /></a>
                <a href="https://www.instagram.com" target='_blank'><img src={instagram} alt="instagram" /></a>
                <a href="https://www.youtube.com" target='_blank'><img src={youtube} alt="youtube" /></a>
              </div>
            </div>
            <div className="column3">
              <img src={logo} alt="logo" />
            </div>
            <div className="column3">
              <p>&copy; 2025 Viral Fission.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
