import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    //여기 안에서 테마정의를 확장함.
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
