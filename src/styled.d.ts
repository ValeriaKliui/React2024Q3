import { BaseTheme, ThemeEnum } from "@components/ThemeProvider/interfaces";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {
    type?: ThemeEnum;
  }
}
