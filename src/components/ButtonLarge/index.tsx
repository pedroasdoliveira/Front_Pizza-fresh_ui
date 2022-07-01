import * as Style from "./style";
import React, { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLargeProps = {
  value: string;
} & ButtonType;

const ButtonLarge = ({value, ...props}: ButtonLargeProps) => {
  return (
    <Style.ButtonLarge>{value}</Style.ButtonLarge>
  ) 
};

export default ButtonLarge;
