import { FC } from "react";
import { LoaderProps } from "./interfaces";
import { LoaderStyled } from "./styled";

export const Loader: FC<LoaderProps> = ({ testID }) => (
  <LoaderStyled data-testid={testID} />
);
