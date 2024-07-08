import { Button } from "@components/Button";
import { useState } from "react";

export const ErrorButton = () => {
  const [isError, setIsError] = useState(false);
  const handleClick = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error("Planned error");
  }

  return <Button onClick={handleClick}>Error Button</Button>;
};
