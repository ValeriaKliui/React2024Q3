import { Button } from "@components/Button";
import { Component } from "react";

export class ErrorButton extends Component {
  state = {
    counter: 0,
  };
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    if (this.state.counter === 1) {
      throw new Error("Planned error");
    }
    return <Button onClick={this.handleClick}>Error Button</Button>;
  }
}
