import React, { useState } from 'react';
import './App.css';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';
import Help from './help';
import './Slider.css';

export default function App() {
  const [show, setShow] = useState(false);

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  var hidden = '-----------------';
  var money = '15.800.000';
  var counter = 0;
  var value = hidden;

  function revealMoney() {
    if (document.getElementById('teste') && counter === 1) {
      counter = 0;
      value = hidden;
      document.getElementById('hidden').innerHTML = value;
      document.getElementById(
        'teste',
      ).src = require('./image/eye_off_idle.png');
    } else if (document.getElementById('teste') && counter === 0) {
      counter = 1;
      value = money;
      document.getElementById('hidden').innerHTML = value;
      document.getElementById('teste').src = require('./image/eye_idle.png');
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          alt=""
          className="App-img-logout"
          src={require('./image/logout_idle.png')}
        />
        <img
          alt=""
          id="helpImage"
          className="App-img-logout"
          src={require('./image/help_idle.png')}
          onClick={() => setShow(true)}
        />
        <span class="jackpot-span">JACKPOT</span>
        <span class="dolar-span">$</span>
        <span class="value-span"> 12.800.000</span>
        <span class="hidden-span">$</span>
        <span class="hidden-value" id="hidden">
          {' '}
          {value}{' '}
        </span>

        <img
          onClick={revealMoney}
          alt=""
          class="img-eye"
          id="teste"
          src={require('./image/eye_off_idle.png')}
        />
      </header>

      <div class="second">
        <Help onClose={() => setShow(false)} show={show} />
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? 'slide active-anim' : 'slide'
              }
            >
              <div class="container-games">
                <div class="big-game">
                  <div class="the-game"></div>
                </div>
                <div class="double-games">
                  <div class="game1">
                    <div class="barra-jackpot"> $ 12.300.00</div>
                  </div>
                  <div class="game2">
                    <div class="barra-jackpot"> $ 12.300.00</div>
                  </div>
                </div>
                <div class="double-games">
                  <div class="game1">
                    <div class="barra-jackpot"> $ 12.300.00</div>
                  </div>
                  <div class="game2">
                    <div class="barra-jackpot"> $ 12.300.00</div>
                  </div>
                </div>
                <div class="double-games">
                  <div className="game1">
                    <div class="barra-jackpot"> $ 12.300.00</div>
                  </div>
                  <div class="game2">
                    <div class="barra-jackpot"> $ 12.300.00</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={'next'} />
        <BtnSlider moveSlide={prevSlide} direction={'prev'} />

        <div className="container-dots">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            ></div>
          ))}
        </div>
      </div>
      <footer>
        <img alt="" src={require('./image/footer.png')} />
      </footer>
    </div>
  );
}
