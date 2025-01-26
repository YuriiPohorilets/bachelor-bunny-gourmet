import React from "react";

import { IAboutInteractor } from "./interactor";

export interface IProps {
  interactor: IAboutInteractor
}
export const AboutRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <div>AboutRouter content</div>
  )
};
