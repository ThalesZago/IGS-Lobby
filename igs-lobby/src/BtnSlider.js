import React from 'react';
import leftArrow from './image/arrow_left.png';
import rightArrow from './image/arrow_right.png';
import './Slider.css';

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img src={direction === 'next' ? rightArrow : leftArrow} />
    </button>
  );
}
