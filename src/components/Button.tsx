import React from "react";

type Prop = {
  color: string;
  border: string;
  backgroundColor: string;
  bg: string;
  onClickFn: () => void;
  disabled: boolean;
  text: string;
};
const Button = ({
  color: color,
  border,
  backgroundColor: bg,
  onClickFn,
  disabled,
  text,
}: Prop) => {
  return (
    <button
      style={{ color: color, border, backgroundColor: bg }}
      disabled={disabled}
      onClick={onClickFn}
      className={`w-fit px-4 py-[6px] h-fit text-black rounded-full font-semibold text-sm flex duration-100 hover:bg-[#005D3E] cursor-pointer justify-center items-center delay-75 disabled:bg-[#005D3E]`}
    >
      {text}
    </button>
  );
};

export default Button;
