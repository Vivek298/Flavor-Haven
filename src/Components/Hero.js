import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState('breakfast.png'); // Set 'breakfast.png' as default
  const [isImageRotated, setIsImageRotated] = useState(false);

  const handleButtonClick = (imageName) => {
    setSelectedImage(imageName);
    setIsImageRotated(true);
    document.querySelectorAll('.M-buttons > div').forEach(button => {
      button.classList.remove('clicked');
    });
    const clickedButton = document.querySelector(`.M-buttons > .button${imageName.charAt(0).toUpperCase() + imageName.slice(1).replace('.png', '')}`);
    if (clickedButton) {
      clickedButton.classList.add('clicked');
    }
    // Reset the rotation state after a delay to allow the animation to play
    setTimeout(() => {
      setIsImageRotated(false);
    }, 500); // Adjust the delay to match the transition duration in CSS
  };

  useEffect(() => {
    // Add the 'clicked' class to the default button when component mounts
    const defaultButton = document.querySelector('.M-buttons > .buttonBreakfast');
    if (defaultButton) {
      defaultButton.classList.add('clicked');
    }
  }, []); // Empty dependency array ensures it runs only once after mount

  return (
    <div className='Hero'>
      <div>
        <h1 className='Heading'>FOOD ZONE</h1>
        <p className='Sub-heading'>Your favorite food for a reason to get us <br/> as soon as possible.</p>
      </div>
      <div>
        <img src={selectedImage} alt="Food" className={`foodimg ${isImageRotated ? 'rotate' : ''}`} />
      </div>
      <div className='M-buttons'>
        <div className='button1' onClick={() => handleButtonClick('breakfast.png')}>BREAKFAST</div>
        <div className='button2' onClick={() => handleButtonClick('lunch.png')}>LUNCH</div>
        <div className='button3' onClick={() => handleButtonClick('dinner.png')}>DINNER</div>
        <div className='button4' onClick={() => handleButtonClick('snacks.png')}>SNACKS</div>
      </div>
    </div>
  );
};

export default Hero;
