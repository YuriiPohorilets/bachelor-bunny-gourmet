import React from "react";

import { IHeroInteractor } from "./interactor";

export interface IProps {
  interactor: IHeroInteractor
}
export const HeroRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <div>HeroRouter content</div>
  )
};
