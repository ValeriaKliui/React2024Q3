import { FC } from "react";
import "./index.css";
import { ButtonProps } from "./interfaces";

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);
