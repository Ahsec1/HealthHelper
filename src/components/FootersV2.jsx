const FootersV2 = () => {
  return (
    <div className="absolute top-[calc(50%_+_580.5px)] left-[calc(50%_-_744px)] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[1488px] h-[237px] flex flex-col items-center justify-between mix-blend-normal text-left text-lg text-gray-4 font-body-default border-[1px] border-solid border-black">
      <img
        className="relative w-[1260.7px] h-px z-[0]"
        alt=""
        src="/divider.svg"
      />
      <div className="relative bg-steelblue w-[1488px] h-[237px] z-[1]" />
      <img
        className="absolute my-0 mx-[!important] h-[0.84%] top-[10.59%] bottom-[88.57%] left-[109px] max-h-full w-[1296px] z-[2]"
        alt=""
        src="/divider1.svg"
      />
      <b className="absolute my-0 mx-[!important] h-[7.05%] w-[16.81%] top-[19.7%] left-[7.57%] text-13xl inline-block font-oxygen text-white z-[3]">
        Health Helper +
      </b>
      <div className="absolute my-0 mx-[!important] h-[12.32%] top-[71.43%] left-[900px] text-center inline-block w-[497px] z-[4]">
        <span className="leading-[18px] text-lightblue">
          <span>All Rights Reserved |</span>
          <span className="text-gray-100">{` `}</span>
        </span>
        <span className="[text-decoration:underline] leading-[30px]">{`Terms and Conditions `}</span>
        <span className="leading-[18px] text-gray-100">{`| `}</span>
        <span className="[text-decoration:underline] leading-[30px]">
          Privacy Policy
        </span>
      </div>
      <div className="absolute my-0 mx-[!important] h-[38.19%] top-[45.57%] left-[112.6px] leading-[30px] inline-block w-[352px] z-[5]">
        Health Helper+: Your Hassle-Free Path to Health We've Got You Covered!"
      </div>
      <div className="my-0 mx-[!important] absolute h-[15.27%] top-[49.41%] bottom-[35.32%] left-[991px] w-[284.2px] flex flex-row items-start justify-start gap-[16px] z-[6]">
        <div className="relative w-9 h-9">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-colors-color-500" />
          <img
            className="absolute h-3/6 w-[27.22%] top-[25%] right-[36.39%] bottom-[25%] left-[36.39%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/facebook.svg"
          />
        </div>
        <div className="relative w-9 h-9">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-colors-color-500" />
          <img
            className="absolute h-[40.56%] w-6/12 top-[29.72%] right-[25%] bottom-[29.72%] left-[25%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/twitter.svg"
          />
        </div>
        <img
          className="relative w-9 h-9"
          alt=""
          src="/social-media-icon-squareinstagram.svg"
        />
        <div className="relative w-9 h-9">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-colors-color-500" />
            <img
              className="absolute h-[47.5%] w-6/12 top-[26.11%] right-[25%] bottom-[26.39%] left-[25%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/linkedin.svg"
            />
          </div>
        </div>
        <div className="relative w-9 h-9">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-colors-color-500" />
            <img
              className="absolute h-[38.89%] w-[55%] top-[30.56%] right-[22.5%] bottom-[30.56%] left-[22.5%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/youtube.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootersV2;
