import { FC } from "react";
import { InputProps } from "./interfaces";
import "./index.css";

export const Input: FC<InputProps> = ({ ...props }) => <input {...props} />;
