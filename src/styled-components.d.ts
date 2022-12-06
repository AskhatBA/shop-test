import "styled-components";
import { StyleThemeType } from "./types/style.types";

declare module "styled-components" {
  export interface DefaultTheme extends StyleThemeType {}
}
