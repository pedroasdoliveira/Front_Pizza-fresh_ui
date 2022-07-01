import * as Style from './ButtonToggle-style'
import React, { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonToggleProps = {
    value: string;
    active?: boolean;
} & ButtonType;

const ButtonToggle = ({value, active = false, ...props}: ButtonToggleProps) => {
  return (
    <Style.ButtonToggle {...props} active={active}>
        {value}
    </Style.ButtonToggle>
  )
}

export default ButtonToggle