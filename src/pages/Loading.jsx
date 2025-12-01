 import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <span className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;   /* ⛔ prevents scroll */
  background: #0b1120;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    position: relative;
    width: 120px;
    height: 140px;
    background-image: radial-gradient(circle 30px, #fff 100%, transparent 0),
      radial-gradient(circle 5px, #fff 100%, transparent 0),
      radial-gradient(circle 5px, #fff 100%, transparent 0),
      linear-gradient(#fff 20px, transparent 0);
    background-position: center 127px, 94px 102px, 16px 18px, center 114px;
    background-size: 60px 60px, 10px 10px, 10px 10px, 4px 14px;
    background-repeat: no-repeat;
    z-index: 10;
    perspective: 500px;
  }

  .loader::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #3b82f6;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -55%) rotate(-45deg);
    border-right-color: transparent;
    box-sizing: border-box;
    filter: drop-shadow(0 0 8px #3b82f6);
  }

  .loader::after {
    content: '';
    position: absolute;
    height: 80px;
    width: 80px;
    transform: translate(-50%, -55%) rotate(-45deg) rotateY(0deg);
    left: 50%;
    top: 50%;
    box-sizing: border-box;
    border: 7px solid #3b82f6;
    border-radius: 50%;
    border-right-color: transparent;
    border-left-color: transparent;
    animation: rotate_4191 0.5s linear infinite;
    filter: drop-shadow(0 0 12px #3b82f6) drop-shadow(0 0 25px #2563eb);
  }

  @keyframes rotate_4191 {
    to {
      transform: translate(-50%, -55%) rotate(-45deg) rotateY(360deg);
    }
  }
`;

export default Loader;
