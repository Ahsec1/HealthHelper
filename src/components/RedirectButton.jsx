import React from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectButton({ path, buttonText }) {
  let navigate = useNavigate();
  
  const handleClick = () => {
    navigate(path);
  }

  return (
    <button onClick={handleClick} className="relative text-17xl leading-[18px] font-semibold" style={{color: '#91D2DF', backgroundColor: '#009BCB'}}>
      {buttonText}
    </button>
  );
}

export default RedirectButton;
