import Button from '@mui/material/Button';
import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <div className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1635px] overflow-hidden text-center text-17xl text-lightblue font-heading-1-roboto-36pt">
      <Navbar/>
      <div className="absolute top-[calc(50%_-_823px)] left-[calc(50%_-_742px)] h-[109px] flex flex-col items-start justify-between">

      </div>
      <div className="absolute top-[calc(50%_-_679.5px)] left-[calc(50%_-_690px)] shadow-[0px_4.8px_4.77px_rgba(0,_0,_0,_0.25)] h-[1463.5px] flex flex-col items-center justify-between py-[63.16542434692383px] px-0 box-border text-[35.75px] text-black">
        <div className="relative text-[71.51px] leading-[21.45px] font-semibold flex items-center justify-center w-[600.7px] h-[19.5px] shrink-0">
          Create An Account
        </div>
        <div className="relative text-[41.71px] leading-[21.45px] font-light inline-block w-[1380.1px] h-[44.3px] shrink-0">
          Please fill in the appropriate details to create your accounts232
        </div>
        <div className="relative w-[1097.6px] h-[119.9px]">
          <div className="absolute top-[calc(50%_-_59.95px)] left-[calc(50%_-_548.8px)] leading-[21.45px] font-semibold inline-block w-[89.4px] h-[19.5px]">
            Email
          </div>
          <div className="absolute top-[calc(50%_-_24.25px)] left-[calc(50%_-_548.8px)] bg-mistyrose shadow-[0px_4.8px_4.77px_rgba(0,_0,_0,_0.25)] box-border w-[1097.6px] h-[84.3px] border-[1.2px] border-solid border-black" />
        </div>
        <div className="relative w-[1097.6px] h-[119.9px] text-left">
          <div className="absolute top-[calc(50%_-_59.95px)] left-[calc(50%_-_548.8px)] leading-[21.45px] font-semibold inline-block w-[164.5px] h-[19.5px]">
            Username
          </div>
          <div className="absolute top-[calc(50%_-_24.25px)] left-[calc(50%_-_548.8px)] bg-mistyrose shadow-[0px_4.8px_4.77px_rgba(0,_0,_0,_0.25)] box-border w-[1097.6px] h-[84.3px] border-[1.2px] border-solid border-black" />
        </div>
        <div className="relative w-[1097.6px] h-[123.2px] text-left">
          <div className="absolute top-[calc(50%_-_61.6px)] left-[calc(50%_-_546.4px)] leading-[21.45px] font-semibold inline-block w-[158.5px] h-[19.5px]">
            Password
          </div>
          <div className="absolute top-[calc(50%_-_22.7px)] left-[calc(50%_-_548.8px)] bg-mistyrose shadow-[0px_4.8px_4.77px_rgba(0,_0,_0,_0.25)] box-border w-[1097.6px] h-[84.3px] border-[1.2px] border-solid border-black" />
        </div>
        <div className="relative w-[1097.6px] h-[123.2px] text-left">
          <div className="absolute top-[calc(50%_-_61.6px)] left-[calc(50%_-_547.6px)] leading-[21.45px] font-semibold inline-block w-[296.8px] h-[19.5px]">
            Confirm Password
          </div>
          <div className="absolute top-[calc(50%_-_22.7px)] left-[calc(50%_-_548.8px)] bg-mistyrose shadow-[0px_4.8px_4.77px_rgba(0,_0,_0,_0.25)] box-border w-[1097.6px] h-[84.3px] border-[1.2px] border-solid border-black" />
        </div>
        <Button variant="contained">Create Account</Button>
        <div className="relative leading-[21.45px] flex items-center w-[1380.1px] h-[58.4px] shrink-0">
          <span className="[line-break:anywhere] w-full">
            <p className="[margin-block-start:0] [margin-block-end:29.8px]">
              <span>{`By Creating an Account you are agreeing to the `}</span>
              <span className="text-steelblue">{`Terms of Service `}</span>
              <span className="text-black">{`and `}</span>
            </p>
            <p className="m-0 text-steelblue">Policy</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;