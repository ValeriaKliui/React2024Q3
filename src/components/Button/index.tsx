import { Component, ReactNode } from "react";
import { ButtonProps, ButtonState } from "./interfaces";

export class Button extends Component<ButtonProps, ButtonState> {
  render(): ReactNode {
    const { children } = this.props;
    return <button>{children}</button>;
  }
}
