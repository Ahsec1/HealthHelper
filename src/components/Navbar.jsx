import React from 'react';
import RedirectButton from './RedirectButton';

const Navbar = () => {
  return (
    <div className="absolute top-[calc(50%_-_812px)] left-[calc(50%_-_743px)] h-[109px] flex flex-col items-start justify-between text-center text-21xl text-lightblue font-heading-1-roboto-36pt">
      <div className="relative bg-steelblue w-[1487px] h-[109px] z-[0]" />
      <div className="my-0 mx-[!important] absolute top-[17.5px] left-[calc(50%_-_720.5px)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1423px] flex flex-row items-center justify-between z-[1]">
        <img className="relative w-[84.8px] h-[74px]" alt="" src="/logo.svg" />
          <RedirectButton path="/Homepage" buttonText="Home"/> 
          <RedirectButton path="/TWD" buttonText="Talk with Doc"/> 
          <RedirectButton path="/Appointments" buttonText="Appointments"/> 
          <RedirectButton path="/Reminders" buttonText="Reminders"/> 
          <RedirectButton path="/Register" buttonText="Sign in"/> 
      </div>
    </div>
  );
};

export default Navbar;
