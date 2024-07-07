import { Component, ReactNode } from "react";
import { ButtonProps, ButtonState } from "./interfaces";
import './index.css'

export class Button extends Component<ButtonProps, ButtonState> {
  render(): ReactNode {
    const { children } = this.props;
    return <button {...this.props}>{children}</button>;
  }
}
