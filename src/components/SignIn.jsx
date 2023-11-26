import { useMemo } from "react";

const SignIn = ({ styleFilledStateenabledSBackgroundColor }) => {
  const styleFilledStateenabledSStyle = useMemo(() => {
    return {
      backgroundColor: styleFilledStateenabledSBackgroundColor,
    };
  }, [styleFilledStateenabledSBackgroundColor]);

  return (
    <div
      className="rounded bg-primary-600 overflow-hidden flex flex-row items-center justify-center py-2.5 px-6 text-center text-sm text-white font-heading-1-roboto-36pt"
      style={styleFilledStateenabledSStyle}
    >
      <div className="relative tracking-[0.1px] leading-[20px] font-medium">
        Label
      </div>
    </div>
  );
};

export default SignIn;
