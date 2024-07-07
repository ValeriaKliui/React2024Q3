import { Component } from "react";
import { InputProps, InputState } from "./interfaces";
import './index.css'

export class Input extends Component<InputProps, InputState> {
  render() {
    const { props } = this;
    return <input {...props} />;
  }
}
