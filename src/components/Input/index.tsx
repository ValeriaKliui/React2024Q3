import { FC } from "react";
import { InputProps } from "./interfaces";
import { InputStyled } from "./styled";

export const Input: FC<InputProps> = ({ type = "text", ...props }) => (
  <InputStyled type={type} {...props} />
);
